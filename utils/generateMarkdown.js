// function to generate markdown for README

let userName;
let repoName;
let licenseFile;

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
  `;
  } else {
    return `<!-- no LinkedIn -->`;
  }
};

const license = function (inp) {
  if (inp.licenseConf && inp.license) {
    licenseFile = inp.license
    return `
  [![License][license-shield]][license-url]
  `;
  } else {
    return "";
  }
};

const projectLogo = function (inp) {
  if (inp.logo && inp.logoPath) {
    return `
  <a href=${inp.repoUrl}>
    <img src=${inp.logoPath} alt="Logo" width="80" height="80">
  </a>
  `;
  } else {
    return `<!-- no Logo -->`;
  }
};

const screenShot = function (inp) {
  if (inp.screen && inp.screenPath) {
    return `
  [![Product Name Screen Shot][product-screenshot]](${inp.repoUrl})

  [product-screenshot]: ${inp.screenPath} 
  `;
  } else {
    return `<!-- no screenshot -->`;
  }
};

const prerequisites = function (inp) {
  if (inp.prereqConf && inp.prereq) {
    return `
  ### Prerequisites 

  ${inp.prereq}
  `;
  } else {
    return `None`;
  }
};

const installation = function (inp) {
  if (inp.installConf && inp.install) {
    return `
  ### Installation 

  ${inp.install}
  `;
  } else {
    return `None`;
  }
};

const contributing = function (inp) {
  if (inp.contri) {
    return `
  ### Contributing 

  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

  1. Fork the Project
  2. Create your Feature Branch ( ***git checkout -b feature/AmazingFeature*** )
  3. Commit your Changes ( ***git commit -m 'Add some AmazingFeature'*** )
  4. Push to the Branch ( ***git push origin feature/AmazingFeature*** )
  5. Open a Pull Request
  `;
  } else {
    return `None`;
  }
};

const contact = function (inp){
  if(inp.contact && inp.name && inp.email){
    return `
  ## Contact
  - ${inp.name} - [${inp.email}](${inp.email})

  <p align="right">(<a href="#readme-top">back to top</a>)</p>
`
  }else{
    return ""
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
  ${license(data)}
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

  ### Built With:
  ${data.builtWith.map((item) => `- <img src="https://img.shields.io/badge/${item}-563D7C?style=for-the-badge&logo=${item}&logoColor=white"> \n`).join(' ')} 

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  <!-- GETTING STARTED -->
  ## Getting Started
  ${prerequisites(data)}

  ${installation(data)}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  <!-- CONTRIBUTING -->
  ${contributing(data)}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  <!-- LICENSE -->
  ## License

  ${data.licenseConf? `Distributed under the ${license(data)}.` : `none`}


  <!-- CONTACT -->
  ${contact(data)}



  This file was generated by ***[Readme Generator](https://github.com/fl4viooliveira/readme-generator)***.

  [contributors-shield]: https://img.shields.io/github/contributors/${userName}/${repoName}.svg?style=for-the-badge
  [contributors-url]: https://github.com/${userName}/${repoName}/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${userName}/${repoName}.svg?style=for-the-badge
  [forks-url]: https://github.com/${userName}/${repoName}/network/members
  [stars-shield]: https://img.shields.io/github/stars/${userName}/${repoName}.svg?style=for-the-badge
  [stars-url]: https://github.com/${userName}/${repoName}/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${userName}/${repoName}.svg?style=for-the-badge
  [issues-url]: https://github.com/${userName}/${repoName}/issues
  [license-shield]: https://img.shields.io/github/license/${userName}/${repoName}.svg?style=for-the-badge
  [license-url]: https://github.com/${userName}/${repoName}/blob/master/${licenseFile}

  
`;
};
