import React, { useState } from 'react';

export const DonloadVedioFile = () => {
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

    const [downloadedCount, setDownloadedCount] = useState(0);

    function downloadVideosOnClick() {
        const promisesToDownload = [];

        // Calculate how many more videos can be downloaded
        const remainingSlots = 3 - downloadedCount;

        // Download up to three videos or the remaining slots
        for (let i = 0; i < remainingSlots && videoLinks.length > 0; i++) {
            const videoLink = videoLinks.shift();
            promisesToDownload.push(VedioLink(videoLink, true));
        }

        // Track downloaded count and update state
        const newDownloadedCount = downloadedCount + promisesToDownload.length;
        setDownloadedCount(newDownloadedCount);

        Promise.allSettled(promisesToDownload)
            .then(results => {
                console.log('Results:', results);
            })
            .catch(err => console.log('Error:', err));
    }

    return (
        <div>
            <button onClick={downloadVideosOnClick}>Download Files</button>
            <p>Downloaded Count: {downloadedCount} / 3</p>
        </div>
    );
};
