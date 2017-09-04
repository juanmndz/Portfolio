import React from 'react';
import Avatar from 'material-ui/Avatar';
import Typing from './Typing';

import StyledFacebookButton from './styles/StyledFacebookButton';
import StyledLinkedinButton from './styles/StyledLinkedinButton';
import StyledGithubButton from './styles/StyledGithubButton';
import StyledMediumButton from './styles/StyledMediumButton';
import StyledTwitterButton from './styles/StyledTwitterButton';
import StyledYoutubeButton from './styles/StyledYoutubeButton';
import WrapperButton from './styles/WrapperButton';
import NavSocialLinks from './styles/NavSocialLinks';

const Header = () => (
  <div>
    <div className="head">
      <Avatar
        className="Home__Avatar"
        src="https://avatars0.githubusercontent.com/u/16310386?v=4&s=460"
        size={150}
      />
    </div>
    <NavSocialLinks>
        <WrapperButton icon="facebook">
          <StyledFacebookButton icon="facebook" />
        </WrapperButton>
        <WrapperButton icon="linkedin">
          <StyledLinkedinButton icon="linkedin" />
        </WrapperButton>
        <WrapperButton icon="github">
          <StyledGithubButton icon="github" />
        </WrapperButton>
        <WrapperButton icon="medium">
          <StyledMediumButton icon="medium" />
        </WrapperButton>
        <WrapperButton icon="twitter">
          <StyledTwitterButton icon="twitter" />
        </WrapperButton>
        <WrapperButton icon="youtube">
          <StyledYoutubeButton icon="youtube" />
        </WrapperButton>
      </NavSocialLinks>

      <Typing onTextChange="Juan Mendez" />
  </div>
);
export default Header;
