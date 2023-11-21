import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fileURLs = [
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4',
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4',
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4',
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4',
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4',
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4',
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4',
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4',

  // Add more file URLs here
];

function FileDownloader() {
  const [downloadedFiles, setDownloadedFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const concurrentLimit = 3; // Set the concurrent download limit here

  const downloadFile = async (url) => {
    try {
      const response = await axios.get(url, {
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setProgress(percentCompleted);
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to download ${url}`);
    }
  };

  const downloadFiles = async () => {
    const downloadPromises = [];
    let currentConcurrent = 0;

    for (const url of fileURLs) {
      if (currentConcurrent >= concurrentLimit) {
        // Wait for ongoing downloads to complete
        await Promise.race(downloadPromises);
        currentConcurrent--;
      }

      currentConcurrent++;
      const downloadPromise = downloadFile(url)
        .then((fileData) => {
          setProgress(0); // Reset progress after download
          return fileData;
        })
        .catch((err) => {
          setError(err.message);
          return null; // Continue downloading other files
        });

      downloadPromises.push(downloadPromise);
    }

    try {
      const downloadedData = await Promise.all(downloadPromises);
      const successfulDownloads = downloadedData.filter((data) => data !== null);
      setDownloadedFiles(successfulDownloads);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    downloadFiles();
  }, []);

  return (
    <div>
      <h1>File Downloader</h1>
      {progress > 0 && <progress value={progress} max="100" />}
      {error && <p>Error: {error}</p>}
      <ul>
        {downloadedFiles.map((file, index) => (
          <li key={index}>{`File ${index + 1} downloaded`}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileDownloader;
