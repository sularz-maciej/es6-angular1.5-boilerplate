class CopyrightsCtrl {
  constructor( AppConstants ) {
    'ngInject';

    this.appName = AppConstants.appName;

    // Get today's date to generate the year
    this.date = new Date();
  }
}

export default CopyrightsCtrl;
