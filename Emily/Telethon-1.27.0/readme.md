## Here is an example of how to use Telethon to get a list of channel users in Python1:

from telethon import TelegramClient
from telethon.tl.functions.channels import GetParticipantsRequest
from telethon.tl.types import ChannelParticipantsSearch

api_id = 12345 # your api_id
api_hash = '0123456789abcdef0123456789abcdef' # your api_hash
channel_username = '@my_channel' # your channel username

client = TelegramClient('session_name', api_id, api_hash)
client.start()

channel = client.get_entity(channel_username)
users = client(GetParticipantsRequest(
    channel, ChannelParticipantsSearch(''), 0, 100,
    hash=0
))
print(users.users)