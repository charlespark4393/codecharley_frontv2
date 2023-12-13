import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';



//Custom Components

import Home from '../pages/home';
import About from '../pages/about';
// import Blog from '../pages/blog';
// import BlogDetails from '../pages/blog/blog-details';
import Service from '../pages/service';
// import ServiceDetails from '../pages/service/service-details';
// import CaseStudy from '../pages/case-study';
// import CaseStudyDetails from '../pages/case-study/case-study-details';
import Contact from '../pages/contact';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'


const App = () => {
    return (
        <div className='App'>
            <Router>  
                <LoadTop />          
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    {/* <Route path="/blog" exact component={Blog} /> */}
                    {/* <Route path="/blog/blog-details" component={BlogDetails} /> */}
                    <Route path="/service" exact component={Service} />
                    {/* <Route path="/service/service-details" component={ServiceDetails} /> */}
                    {/* <Route path="/case-study" exact component={CaseStudy} /> */}
                    {/* <Route path="/case-study/case-study-details" component={CaseStudyDetails} /> */}
                    <Route path="/contact" component={Contact} />
                    <Route component={Error} />
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
