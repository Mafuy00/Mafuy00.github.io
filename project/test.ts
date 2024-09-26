import { Context, Devvit, PostContextActionEvent } from '@devvit/public-api';
import { FlairListResponse, Metadata } from '@devvit/protos';

const flair = Devvit.use(Devvit.Types.RedditAPI.Flair);

async function getFlair(event: PostContextActionEvent, metadata?: Metadata) {
  let success = true;
  let response: FlairListResponse | string;

  try {
    // The following call makes a call to https://www.reddit.com/dev/api/#GET_api_flairlist
    response = await flair.FlairList({
      limit: 10,
      subreddit: event.context.subreddit,
    });
  } catch (err: any) {
    success = false;
    response = `Error occurred: ${JSON.stringify(err)}`;
  }

  return {
    success,
    message: JSON.stringify(response),
  };
}

Devvit.addAction({
  name: 'Get flair',
  description: 'Lists out the flair on this post.',
  context: Context.POST,
  handler: getFlair,
});

export default Devvit;