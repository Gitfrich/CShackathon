pipButton.addEventListener("click", async () => {
  const player = document.querySelector("#player");

  if (!document.pictureInPictureEnabled) {
    console.error("Picture-in-Picture is not supported by this browser.");
    return;
  }

  if (!player) {
    console.error("Player element not found.");
    return;
  }

  try {
    if (document.pictureInPictureElement) {
      // If already in Picture-in-Picture, exit it
      await document.exitPictureInPicture();
    } else {
      // Request Picture-in-Picture on the video element
      await player.requestPictureInPicture();
    }
  } catch (error) {
    console.error("Error with Picture-in-Picture:", error);
  }
});



document.getElementById('startReminderr').addEventListener('click',() => {
  chrome.runtime.sendMessage({ action: "stopReminder" }, (response) => {
    alert(response.status);
  });
}


// pipButton.addEventListener('click', async () => {
//   const player = document.querySelector("#player");

//   // Check if Picture-in-Picture is supported and the player element is available
//   if (!document.pictureInPictureEnabled) {
//     console.error("Picture-in-Picture is not supported by this browser.");
//     return;
//   }
  
//   if (!player) {
//     console.error("Player element not found.");
//     return;
//   }

//   try {
//     // If already in Picture-in-Picture, exit; otherwise, enter
//     if (document.pictureInPictureElement) {
//       await document.exitPictureInPicture();
//     } else {
//       await player.requestPictureInPicture();
//     }
//   } catch (error) {
//     console.error("Failed to enter Picture-in-Picture mode:", error);
//   }
// });




// pipButton.addEventListener('click', async () => {
//   const player = document.querySelector("#player");

//   // Check if Picture-in-Picture is enabled
//   if (document.pictureInPictureEnabled && !player.disablePictureInPicture) {
//     try {
//       // Request Picture-in-Picture on the video element
//       if (document.pictureInPictureElement) {
//         await document.exitPictureInPicture();
//       } else {
//         await player.requestPictureInPicture();
//       }
//     } catch (error) {
//       console.error("Error entering Picture-in-Picture mode:", error);
//     }
//   } else {
//     console.log("Picture-in-Picture is not supported.");
//   }
// });



// pipButton.addEventListener('click', async () => {
//     const player = document.querySelector("#player");
  
//     // Open a Picture-in-Picture window.
//     const pipWindow = await documentPictureInPicture.requestWindow();
  
//     // Move the player to the Picture-in-Picture window.
//     pipWindow.document.body.append(player);
//   });








// const videoPlayer = document.getElementById("ytplayer");

// // ...

// // Open a Picture-in-Picture window.
// const pipWindow = await window.documentPictureInPicture.requestWindow({
//   width: videoPlayer.clientWidth,
//   height: videoPlayer.clientHeight,
// });






// const pipButton = document.createElement("button");
// pipButton.textContent = "Enter PiP";
// document.body.appendChild(pipButton);

// pipButton.addEventListener("click", () => {
//   const videoElement = document.querySelector("ytplayer"); // Get the video element

//   if (videoElement) {
//     videoElement
//       .requestPictureInPicture()
//       .then(() => {
//         // Success
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   }
// });
