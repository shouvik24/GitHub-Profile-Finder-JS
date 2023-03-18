const searchInput = document.getElementById("searchInput");
const get = (param) => document.getElementById(`${param}`);
const userName = get("userName");
const getLink = get("getLink");
const profileImg = get("profileImg");
const joinDate = get("joinDate");
const description = get("description");
const repos = get("repos");
const reposNumber = get("reposNumber");
const Followers = get("Followers");
const FollowersNumber = get("FollowersNumber");
const Following = get("Following");
const FollowingNumber = get("FollowingNumber");
const locationShow = get("locationShow");
const websiteLink = get("websiteLink");
const twitter = get("twitter");
const company = get("company");
const url = "https://api.github.com/users/";
const locationIcon = document.querySelector(".location");
const websiteLinkIcon = document.querySelector(".websiteLink");
const twitterIcon = document.querySelector(".twitter");
const companyIcon = document.querySelector(".company");

function getUserData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderData(data);
      console.log(data);
    });
}

function renderData(data) {
  userName.innerText = data.name;
  getLink.innerHTML = data.html_url;
  getLink.href = `${data.html_url}`;
  profileImg.src = `${data.avatar_url}`;
  joinDate.innerText = data.created_at;
  description.innerText = data.bio;
  repos.innerText = "Public Repos";
  Followers.innerText = "Followers";
  Following.innerText = "Following";
  reposNumber.innerText = data.public_repos;
  FollowersNumber.innerText = data.followers;
  FollowingNumber.innerText = data.following;
  locationShow.innerText = data.location;
  websiteLink.innerText = data.blog;
  twitter.innerText = data.twitter_username;
  company.innerText = data.company;
  locationIcon.classList.add("icon-active");
  websiteLinkIcon.classList.add("icon-active");
  twitterIcon.classList.add("icon-active");
  companyIcon.classList.add("icon-active");
}
searchInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    if (searchInput.value != "") {
      getUserData(url + searchInput.value);
    }
  }
});
