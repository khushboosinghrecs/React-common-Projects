
function VidioLink(vedio) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (a) {
              resolve(vedio , 'downloaded 100%');
          } else
              reject("not in good code");
      }, 900);
  })
}

async function DownloadVedio(){
  const downloadVedio1 = await VedioLink('vedio1', true);
  const downloadVedio2 = await VedioLink('veido2', true);
  console.log(downloadVedio1, downloadVedio2)
}
DownloadVedio();