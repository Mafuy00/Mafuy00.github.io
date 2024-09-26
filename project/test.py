import praw

# Initialize Reddit instance with credentials
reddit = praw.Reddit(
    client_id='MiFUUs5jnyiFPa4Pf7WdxQ',
    client_secret='w2enoaMX93w9QDynkgk8p2lICSZVjA',
    user_agent='roamio',  # Something like 'myApp v1.0'
)

# Example: Fetch 5 hot posts from a subreddit (e.g., r/python)
subreddit = reddit.subreddit("python")
for post in subreddit.hot(limit=5):
    print(f"Title: {post.title}, Upvotes: {post.score}")