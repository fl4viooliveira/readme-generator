// function to generate markdown for README

let userName;
let repoName;

const repoLink = (url) => {
  if (url) {
    userName = url.split("/").slice(-2)[0];
    repoName = url.split("/").pop();
  } else {
    userName = `Had some error on you Link input: ${url}`;
    repoName = `Had some error on you Link input: ${url}`;
  }
};
// https://github.com/fl4viooliveira/find-your-movie

module.exports = function (data) {
  repoLink(data.repoUrl)
  console.log(data, userName, repoName);
  return `
  # ${data.title}
`;
};

// [![Contributors][contributors-shield]][contributors-url]
// [![Forks][forks-shield]][forks-url]
// [![Stargazers][stars-shield]][stars-url]
// [![Issues][issues-shield]][issues-url]
// [![MIT License][license-shield]][license-url]
// [![LinkedIn][linkedin-shield]][linkedin-url]
//   # ${data.title}
// [contributors-shield]: https://img.shields.io/github/contributors/${data.github_username}/${data.repo_name}.svg?style=for-the-badge
// [contributors-url]: https://github.com/${data.github_username}/${data.repo_name}/graphs/contributors
// [forks-shield]: https://img.shields.io/github/forks/${data.github_username}/${data.repo_name}.svg?style=for-the-badge
// [forks-url]: https://github.com/${data.github_username}/${data.repo_name}/network/members
// [stars-shield]: https://img.shields.io/github/stars/${data.github_username}/${data.repo_name}.svg?style=for-the-badge
// [stars-url]: https://github.com/${data.github_username}/${data.repo_name}/stargazers
// [issues-shield]: https://img.shields.io/github/issues/${data.github_username}/${data.repo_name}.svg?style=for-the-badge
// [issues-url]: https://github.com/${data.github_username}/${data.repo_name}/issues
// [license-shield]: https://img.shields.io/github/license/${data.github_username}/${data.repo_name}.svg?style=for-the-badge
// [license-url]: https://github.com/${data.github_username}/${data.repo_name}/blob/master/LICENSE.txt
