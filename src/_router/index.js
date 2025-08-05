import Vue from 'vue';
import Router from 'vue-router';
import publicRoutes from './public';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes: [
    ...publicRoutes
  ],
  scrollBehavior(to, from, savedPosition) {
    // Better scroll behavior with smooth scrolling
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// Global navigation guards
router.beforeEach((to, from, next) => {
  // Add loading state or analytics tracking here
  // Example: store.dispatch('setLoading', true);
  
  // Validate route parameters if needed
  if (to.matched.length === 0) {
    // Route not found, redirect to 404
    next('/404');
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // Remove loading state
  // Example: store.dispatch('setLoading', false);
  
  // Analytics tracking
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: to.path
    });
  }
});

// Error handling
router.onError((error) => {
  console.error('Router error:', error);
  // You could also send errors to a logging service
});

export default router;
