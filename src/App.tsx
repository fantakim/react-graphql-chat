import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import { themeChange } from 'theme-change';
import { PAGE } from './constants';
import { AuthenticatePage } from './pages/AuthenticatePage';
import { ChannelPage } from './pages/ChannelPage';
import { HomePage } from './pages/HomePage';
import { JoinAsMemberPage } from './pages/JoinAsMemberPage';
import { JoinPage } from './pages/JoinPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { WhatThePage } from './pages/WhatThePage';

const App = () => {
  useEffect(() => {
    // themes initialization
    themeChange(false);
  }, []);

  return (
    <BrowserRouter>
      <SlideRoutes>
        <Route path={PAGE.root} element={<HomePage />} />
        <Route path={PAGE.join} element={<JoinPage />} />
        <Route path={PAGE.joinAsMember} element={<JoinAsMemberPage />} />
        <Route path={PAGE.signIn} element={<SignInPage />} />
        <Route path={PAGE.signUp} element={<SignUpPage />} />
        <Route
          path={PAGE.authenticate + '/:email?/:code?'}
          element={<AuthenticatePage />}
        />
        <Route path={PAGE.channel + '/:channelId'} element={<ChannelPage />} />
        <Route path={PAGE.whatThe} element={<WhatThePage />} />
        <Route path={PAGE.privacyPolicy} element={<PrivacyPolicyPage />} />
      </SlideRoutes>
    </BrowserRouter>
  );
};

export default App;
