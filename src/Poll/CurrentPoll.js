import "../App.css";
import SubmitPromptDialog from './SubmitPromptDialog.js';
import SCPSocket from '../CommonObjects.js';
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import PollItem from './PollItem.js';
import ls from 'localstorage-slim';

import * as urls from '../URLs.js';
const url_api = urls.URL_API;

const socket = SCPSocket.getSocketInstance();

function PollList(props) {
    const sorted = props.pollingItems.sort(((a, b) => b.votes - a.votes));

    const items = sorted.map((item) => <PollItem
        prompt={item.prompt}
        scpClass={item.scpClass}
        votes={item.votes}
        idx={item.index}
        author={(item.author !== undefined) ? item.author : 'Dr. [REDACTED]'}
    />);

    return (
        <div className="poll-list/">
            <Grid container spacing={3}>
                {items}
            </Grid>
        </div>
    )
}

function LastSCP() {
    const [lastSCP, setLastSCP] = useState("");

    useEffect(() => {
        fetch(url_api + "last_scp_desc/", {
            headers: new Headers({
                'Authorization': 'Basic ' + btoa(localStorage.getItem('id') + ':' + localStorage.getItem('mdp')),
                'Content-Type': 'application/x-www-form-urlencoded'

            })
        })
            .then((res) => res.text())
            .then((data) => {
                setLastSCP(data);
            })

        socket.on("next_round", (p) => {
            setLastSCP(p.scp_desc);
        });

        return () => {
            socket.off('next_round', (p) => {
                setLastSCP(p.scp_desc);
            });
            }    
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: lastSCP }} />
    );
}

function CurrentPoll() {

    const [pollingItems, setPollingItems] = useState([]);
    const [curscp, setCurscp] = useState("");

    const [needupdate, setNeedUpdate] = useState(0);


    // useEffect(() => {
    //     socket.on("new_prompt", (data) => {
    //         console.log('omg new prompt');
    //         console.log(data);
    //         pollingItems.push(data['prompt'])
    //         setPollingItems(pollingItems);
    //         console.log(pollingItems);
    //     });
    // });

    useEffect(() => {
        const addPrompt = (p) => setPollingItems(previous => [...previous, p]);

        let cur_url = url_api + 'get_poll/';
        fetch(cur_url)
            .then((res) => res.json())
            .then((data) => {
                for(var p of data.poll) {
                    addPrompt(p);
                }
            })

        fetch(url_api + "current_scp_number/")
            .then((res) => res.json())
            .then((data) => {
                setCurscp(data);
                ls.set('current_scp_number', data);
            })    
    

        // sockets shenanigans
        socket.on("new_prompt", (p) => {
            addPrompt(p.prompt);
        });

        socket.on("next_round", () => {
            console.log('hey there cowboy');
            setPollingItems([]);
        });

        // call when will unmount
        return () => {
            socket.off('new_prompt', (p) => {
                addPrompt(p.prompt);
            });

            socket.off("next_round", () => {
                console.log('hey there cowboy');
                setPollingItems([]);
            });
         }

    }, [needupdate]);

    return (
        <div>

            <div className="greywrap">
                <p className="justifytext">
                    <h2> What is this website ? </h2>
                    This website uses artifical intelligence to generate customs SCP from a simple prompt.
                    Every hour the prompt with the most votes is chosen to create a new SCP. Previous SCPs can be found in the <a href="./list"> archives</a>.
                    You can vote for your favorite SCP or submit your own description on the poll below. <b>We now have a community <a href="https://discord.gg/WeXkUP6f5H">discord server</a> !</b>

                    <br /><br />
                    If you're still  lost please check out our <a href="./about">FAQ</a>.
                </p>
            </div>

            <br />

            <div className="greywrap">
                <div className="justifytext">
                    <h2>Current Poll :</h2>
                </div>
                <br />
                <PollList pollingItems={pollingItems} />
                <br />
                <SubmitPromptDialog className="openDialogBtn" curscp={curscp} needupdate={setNeedUpdate} />
            </div>

            <br />

            <div className="greywrap">
                <div className="justifytext">
                    <h2>Last SCP :</h2>
                </div>

                <br /><br />

                <LastSCP className="scpcont" />
            </div>
        </div>
    );
}

export default CurrentPoll;
