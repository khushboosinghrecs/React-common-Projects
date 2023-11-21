import React, { useState } from 'react';
let downloadedCount = 0;
const videoLinks = [
    'vedio1',
    'vedio2',
    'vedio3',
    'vedio4',
    'vedio5',
    'vedio6',
    'vedio7',
    'vedio8',
];

export const DownloadVedio = () => {

    const [results, setResults] = useState([])
    const [count, setCount] = useState(0)
    function VedioLink(vedio, a) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (a) {
                    resolve(vedio + ' downloaded 100%');
                } else {
                    reject("not in good code");
                }
            }, 900);
        });
    }



    async function downloadFiles() {

        const promisesToDownload = [];

        // Download up to three videos
        while (downloadedCount < 3 && videoLinks.length > 0) {
            const videoLink = videoLinks.shift();
            promisesToDownload.push(VedioLink(videoLink, true));
            downloadedCount++;
        }

        Promise.allSettled(promisesToDownload)
            .then(res => {
                console.log('Results:', res);
                setResults(res);
                console.log(results)
                downloadedCount = 0;

            })
            .catch(err => console.log('Error:', err));
    }

    return (
        <>
            <button onClick={downloadFiles}>Download Files</button>
            {results ? results.map((ele, i) => <p key={i}>{ele.value}</p>) : 'no data'}
        </>
    )
}

