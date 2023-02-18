// function to generate markdown for README

let userName;
let repoName;

let urlLinkedin;

const repoLink = (url) => {
  if (url) {
    userName = url.split("/").slice(-2)[0];
    repoName = url.split("/").pop();
  } else {
    userName = `Had some error on you Link input: ${url}`;
    repoName = `Had some error on you Link input: ${url}`;
  }
};

const linkedin = function (url) {
  if (url.linkedin && url.linkedinUrl) {
    return `
  [![LinkedIn][linkedin-shield]][linkedin-url]

  [linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
  [linkedin-url]: ${url.linkedinUrl}
  `
  }else{
   return `<!-- no LinkedIn -->` 
  }
};

const projectLogo = function(inp){
  if (inp.logo && inp.logoPath){
    return `
  <a href=${inp.repoUrl}>
    <img src=${inp.logoPath} alt="Logo" width="80" height="80">
  </a>
  `
  }else{
    return `<!-- no Logo -->`
  }
}

const screenShot = function(inp){
  if (inp.screen && inp.screenPath){
    return `
  [![Product Name Screen Shot][product-screenshot]](${inp.repoUrl})

  [product-screenshot]: ${inp.screenPath} 
  `
  }else{
    return `<!-- no screenshot -->`
  }
}

module.exports = function (data) {
  repoLink(data.repoUrl);
  console.log(data, userName, repoName);

  return `
  <a name="readme-top"></a>

  <!-- PROJECT SHIELDS -->
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  ${linkedin(data)}

  <!-- PROJECT LOGO -->
  <br />
  <div align="center">
  ${projectLogo(data)}

  <h3 align="center">${data.title}</h3>
    <p align="center">
      ${data.shortDescription}
      <br />
      <a href=${data.repoUrl}><strong>Explore the docs »</strong></a>
      <br />
      <br />
      <a href="${data.repoUrl}">View Demo</a>
      ·
      <a href="${data.repoUrl}/issues">Report Bug</a>
      ·
      <a href="${data.repoUrl}/issues">Request Feature</a>
    </p>
  </div>

  <!-- TABLE OF CONTENTS -->
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
          <li><a href="#built-with">Built With</a></li>
        </ul>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ol>
  </details>

  <!-- ABOUT THE PROJECT -->
  ## About The Project

  ${screenShot(data)}

  ${data.about}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>


  [contributors-shield]: https://img.shields.io/github/contributors/${userName}/${repoName}.svg?style=for-the-badge
  [contributors-url]: https://github.com/${userName}/${repoName}/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${userName}/${repoName}.svg?style=for-the-badge
  [forks-url]: https://github.com/${userName}/${repoName}/network/members
  [stars-shield]: https://img.shields.io/github/stars/${userName}/${repoName}.svg?style=for-the-badge
  [stars-url]: https://github.com/${userName}/${repoName}/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${userName}/${repoName}.svg?style=for-the-badge
  [issues-url]: https://github.com/${userName}/${repoName}/issues
  [license-shield]: https://img.shields.io/github/license/${userName}/${repoName}.svg?style=for-the-badge
  [license-url]: https://github.com/${userName}/${repoName}/blob/master/LICENSE.txt

  
`;
};
