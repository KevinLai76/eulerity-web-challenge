import React from "react";

export const downloadImage = (imageUrl:string) => {
    return fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${imageUrl}.jpeg`);
        document.body.appendChild(link);
        link.click();
        if (link.parentNode){
            link.parentNode.removeChild(link);
        }
      })
      .catch((error) => {
        console.error('Error downloading image:', error);
      });
};
