import app from 'flarum/admin/app';
import { ConfigureWithOAuthPage } from '@fof-oauth';

app.initializers.add('Ssangyongsports/oauth-slack', () => {
  app.extensionData.for('Ssangyongsports-oauth-slack').registerPage(ConfigureWithOAuthPage);
});
