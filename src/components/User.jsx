import React from "react";

const User = ({ userGitHub }) => {
  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img src={userGitHub.avatar_url} alt="" />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {userGitHub.name}
            <span>@{userGitHub.login}</span>
          </h1>
          <p className="app-user_about">{userGitHub.bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{userGitHub.public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span>{userGitHub.followers}</span>
        </li>
        <li className="app-user_stats-item">
          Подписки
          <span>{userGitHub.following}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{userGitHub.location}</li>
        <li className="app-user_location-item">
          <a href={userGitHub.blog}>{userGitHub.blog}</a>
        </li>
      </ul>
    </div>
  );
};

export default User;
