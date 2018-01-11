import React from 'react';
import {IndexRoute, Route, Router} from 'react-router';
//
import AccountingPage from '../../pages/accounting/AccountingContainer';
import CalendarPage from '../../pages/calendar/CalendarContainer';
import ECommercePage from '../../pages/eCommerce/ECommerceContainer';
import EmailPage from '../../pages/email/EmailContainer';
import FilesPage from '../../pages/files/FilesContainer';
import HomePage from '../../pages/home/HomeContainer';
import ReportsPage from '../../pages/reports/ReportsContainer';
import SocialPage from '../../pages/social/SocialContainer';
import WebPage from '../../pages/web/WebContainer';
import ErrorPage from '../../shared-fe/components/error';
import App from '../../shared-fe/containers/App';

export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="accounting" component={AccountingPage}/>
        <Route path="calendar" component={CalendarPage}/>
        <Route path="ecommerce" component={ECommercePage}/>
        <Route path="email" component={EmailPage}/>
        <Route path="files" component={FilesPage}/>
        <Route path="reports" component={ReportsPage}/>
        <Route path="social" component={SocialPage}/>
        <Route path="web" component={WebPage}/>
        <Route path="error" component={ErrorPage}/>
        <IndexRoute component={HomePage}/>
      </Route>
    </Router>
  )
}
