### Real Time Notification

In the updated admin theme, we have introduced an option of getting real time notifications upon order creation and updation. For the real time notification, you need to have some of the configuration within your project as mentioned below:

- [Create an account](https://dashboard.pusher.com/accounts/sign_up?_ga=2.266851022.1754006062.1647430118-1332525715.1647430118&_gl=1*jiq2no*_ga*MTMzMjUyNTcxNS4xNjQ3NDMwMTE4*_ga_V7TRZJDKDQ*MTY0NzQzMDExOC4xLjAuMTY0NzQzMDE0MC4w), then create a Channels app for your application. Go to the “App Keys” menu for that app, and copy the app_id, key, secret and cluster.
- Upon successfull generation of pusher credentials, go to your application .env file and replace the respective values with generated credentials.
- After that run queue listener command i.e. php artisan queue:listen --queue=broadcastable

Queue broadcasts actually make your application more responsive and allows a realtime experience. When you have any action for order creation or updation, then you can immediately get respond to the admin notification menu instead of having to wait on the process to complete or page to refresh.
