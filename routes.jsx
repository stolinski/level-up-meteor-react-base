// Subscriptions
FlowRouter.subscriptions = () => {
  // this.register('Products', Meteor.subscribe('products'));
};

// Home Page
FlowRouter.route('/', {
  action: () => {
    GAnalytics.pageview();
    ReactLayout.render(HomeLayout, {
      content: <Home />
    })
  }
});