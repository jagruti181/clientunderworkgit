(function() {
  'use strict';
  angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'easypiechart', 'mgo-angular-wizard', 'textAngular', 'ui.tree', 'ngMap', 'ngTagsInput', 'app.ui.ctrls', 'app.ui.directives', 'app.ui.services', 'app.controllers', 'app.directives', 'app.form.validation', 'app.ui.form.ctrls', 'app.ui.form.directives', 'app.tables', 'app.map', 'app.task', 'app.localization', 'app.chart.ctrls', 'app.chart.directives', 'app.page.ctrls','appUser','userRest','applogUser','loguserRest','appScheme','schemeRest','appDistributor','distributorRest','zoneRest','appZone','appRetailer','retailerRest','appCatelog','catelogRest','appTag','tagRest','appProduct','productRest','appOrder','orderRest','appProducttag','producttagRest']).config([
    '$routeProvider', function($routeProvider,$routeParams) {
      return $routeProvider.when('/', {
        redirectTo: '/dashboard'
      }).when('/dashboard', {
        templateUrl: 'views/dashboard.html'
        //controller:'usercnt'
      }).when('/zone/zone',{
          templateUrl: 'views/zone/zone.html'
      }).when('/product',{
          templateUrl: 'views/product/product.html'
      }).when('/tag',{
          templateUrl: 'views/tag/tag.html'
      }).when('/producttag',{
          templateUrl: 'views/producttag/producttag.html'
      }).when('/retailer',{
          templateUrl: 'views/retailer/retailer.html'
      }).when('/catelog',{
          templateUrl: 'views/catelog/catelog.html'
      }).when('/order/createorder',{
          templateUrl: 'views/order/createorder.html'
      }).when('/producttag/createproducttag',{
          templateUrl: 'views/producttag/createproducttag.html'
      }).when('/product/createproduct',{
          templateUrl: 'views/product/createproduct.html'
      }).when('/tag/createtag',{
          templateUrl: 'views/tag/createtag.html'
      }).when('/catelog/createcatelog',{
          templateUrl: 'views/catelog/createcatelog.html'
      }).when('/retailer/createretailer',{
          templateUrl: 'views/retailer/createretailer.html'
      }).when('/zone/state',{
          templateUrl: 'views/zone/state.html'
      }).when('/zone/city',{
          templateUrl: 'views/zone/city.html'
      }).when('/zone/area',{
          templateUrl: 'views/zone/area.html',
          controller:'area'
      }).when('/order',{
          templateUrl: 'views/order/order.html'
      }).when('/order/edit/:id',{
          templateUrl: 'views/order/updateorder.html',
          controller:'editorder'
      }).when('/producttag/edit/:id',{
          templateUrl: 'views/producttag/updateproducttag.html',
          controller:'editproducttag'
      }).when('/product/edit/:id',{
          templateUrl: 'views/product/updateproduct.html',
          controller:'editproduct'
      }).when('/tag/edit/:id',{
          templateUrl: 'views/tag/updatetag.html',
          controller:'edittag'
      }).when('/catelog/edit/:id',{
          templateUrl: 'views/catelog/updatecatelog.html',
          controller:'editcatelog'
      }).when('/user/edit/:id',{
          templateUrl: 'views/user/updateuser.html',
          controller:'edituser'
      }).when('/retailer/edit/:id',{
          templateUrl: 'views/retailer/updateretailer.html',
          controller:'editretailer'
      }).when('/scheme/edit/:id',{
          templateUrl: 'views/scheme/updatescheme.html',
          controller:'editscheme'
      }).when('/distributor/edit/:id',{
          templateUrl: 'views/distributor/updatedistributor.html',
          controller:'editdistributor'
      }).when('/zone/zone/edit/:id',{
          templateUrl: 'views/zone/updatezone.html',
          controller:'editzone'
      }).when('/zone/state/edit/:id',{
          templateUrl: 'views/zone/updatestate.html',
          controller:'editstate'
      }).when('/zone/area/edit/:id',{
          templateUrl: 'views/zone/updatearea.html',
          controller:'editarea'
      }).when('/zone/city/edit/:id',{
          templateUrl: 'views/zone/updatecity.html',
          controller:'editcity'
      }).when('/producttag/delete/:id',{
          templateUrl: 'views/producttag/deleteproducttag.html',
          controller:'deleteproducttag'
      }).when('/product/delete/:id',{
          templateUrl: 'views/product/deleteproduct.html',
          controller:'deleteproduct'
      }).when('/order/delete/:id',{
          templateUrl: 'views/order/deleteorder.html',
          controller:'deleteorder'
      }).when('/tag/delete/:id',{
          templateUrl: 'views/tag/deletetag.html',
          controller:'deletetag'
      }).when('/catelog/delete/:id',{
          templateUrl: 'views/catelog/deletecatelog.html',
          controller:'deletecatelog'
      }).when('/retailer/delete/:id',{
          templateUrl: 'views/retailer/deleteretailer.html',
          controller:'deleteretailer'
      }).when('/user/delete/:id',{
          templateUrl: 'views/user/deleteuser.html',
          controller:'deleteuser'
      }).when('/distributor/delete/:id',{
          templateUrl: 'views/distributor/deletedistributor.html',
          controller:'deletedistributor'
      }).when('/scheme/delete/:id',{
          templateUrl: 'views/scheme/deletescheme.html',
          controller:'deletescheme'
      }).when('/zone/zone/delete/:id',{
          templateUrl: 'views/zone/deletezone.html',
          controller:'deletezone'
      }).when('/zone/state/delete/:id',{
          templateUrl: 'views/zone/deletestate.html',
          controller:'deletestate'
      }).when('/zone/area/delete/:id',{
          templateUrl: 'views/zone/deletearea.html',
          controller:'deletecity'
      }).when('/zone/city/delete/:id',{
          templateUrl: 'views/zone/deletecity.html',
          controller:'deletecity'
      }).when('/zone/createzone',{
          templateUrl: 'views/zone/createzone.html'
      }).when('/zone/createstate',{
          templateUrl: 'views/zone/createstate.html'
      }).when('/zone/createcity',{
          templateUrl: 'views/zone/createcity.html'
      }).when('/zone/createarea',{
          templateUrl: 'views/zone/createarea.html'
      }).when('/distributor',{
          templateUrl: 'views/distributor/distributor.html'
      }).when('/distributor/createdistributor',{
          templateUrl: 'views/distributor/createdistributor.html'
      }).when('/scheme',{
          templateUrl: 'views/scheme/scheme.html'
      }).when('/scheme/createscheme',{
          templateUrl: 'views/scheme/createscheme.html'
      }).when('/loguser',{
          templateUrl: 'views/loguser/showloguser.html',
          controller: 'loguser'
      }).when('/loguser/loguser',{
          templateUrl: 'views/loguser/loguser.html'
      }).when('/user',{
          templateUrl:'views/user/showuser.html'
      }).when('/user/user',{
        templateUrl: 'views/user/user.html'
      }).when('/user/showuser',{
        templateUrl: 'views/user/showuser.html'
      }).when('/ui/typography', {
        templateUrl: 'views/ui/typography.html',
        controller:'appUser'
      }).when('/ui/buttons', {
        templateUrl: 'views/ui/buttons.html'
      }).when('/ui/icons', {
        templateUrl: 'views/ui/icons.html'
      }).when('/ui/grids', {
        templateUrl: 'views/ui/grids.html'
      }).when('/ui/widgets', {
        templateUrl: 'views/ui/widgets.html'
      }).when('/ui/components', {
        templateUrl: 'views/ui/components.html'
      }).when('/ui/timeline', {
        templateUrl: 'views/ui/timeline.html'
      }).when('/ui/nested-lists', {
        templateUrl: 'views/ui/nested-lists.html'
      }).when('/ui/pricing-tables', {
        templateUrl: 'views/ui/pricing-tables.html'
      }).when('/forms/elements', {
        templateUrl: 'views/forms/elements.html'
      }).when('/forms/layouts', {
        templateUrl: 'views/forms/layouts.html'
      }).when('/forms/validation', {
        templateUrl: 'views/forms/validation.html'
      }).when('/forms/wizard', {
        templateUrl: 'views/forms/wizard.html'
      }).when('/maps/gmap', {
        templateUrl: 'views/maps/gmap.html'
      }).when('/maps/jqvmap', {
        templateUrl: 'views/maps/jqvmap.html'
      }).when('/tables/static', {
        templateUrl: 'views/tables/static.html'
      }).when('/tables/responsive', {
        templateUrl: 'views/tables/responsive.html'
      }).when('/tables/dynamic', {
        templateUrl: 'views/tables/dynamic.html'
      }).when('/charts/others', {
        templateUrl: 'views/charts/charts.html'
      }).when('/charts/morris', {
        templateUrl: 'views/charts/morris.html'
      }).when('/charts/flot', {
        templateUrl: 'views/charts/flot.html'
      }).when('/mail/inbox', {
        templateUrl: 'views/mail/inbox.html'
      }).when('/mail/compose', {
        templateUrl: 'views/mail/compose.html'
      }).when('/mail/single', {
        templateUrl: 'views/mail/single.html'
      }).when('/pages/features', {
        templateUrl: 'views/pages/features.html'
      }).when('/pages/signin', {
        templateUrl: 'views/pages/signin.html'
      }).when('/pages/signup', {
        templateUrl: 'views/pages/signup.html'
      }).when('/pages/forgot', {
        templateUrl: 'views/pages/forgot-password.html'
      }).when('/pages/lock-screen', {
        templateUrl: 'views/pages/lock-screen.html'
      }).when('/pages/profile', {
        templateUrl: 'views/pages/profile.html'
      }).when('/404', {
        templateUrl: 'views/pages/404.html'
      }).when('/pages/500', {
        templateUrl: 'views/pages/500.html'
      }).when('/pages/blank', {
        templateUrl: 'views/pages/blank.html'
      }).when('/pages/invoice', {
        templateUrl: 'views/pages/invoice.html'
      }).when('/pages/services', {
        templateUrl: 'views/pages/services.html'
      }).when('/pages/about', {
        templateUrl: 'views/pages/about.html'
      }).when('/pages/contact', {
        templateUrl: 'views/pages/contact.html'
      }).when('/tasks', {
        templateUrl: 'views/tasks/tasks.html'
      }).otherwise({
        redirectTo: '/404'
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=app.js.map
