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
  if (url.linkedin) {
    return `
  [![LinkedIn][linkedin-shield]][linkedin-url]

  [linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
  [linkedin-url]: ${url.linkedinUrl}
  `
  }else{
   return `<!-- no LinkedIn -->` 
  }
};

module.exports = function (data) {
  repoLink(data.repoUrl);
  console.log(data, userName, repoName);
  return `
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  ${linkedin(data)}

  # ${data.title}

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
