class FriendList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    global.console.log(`${name} is now friend!`);
  }
}

describe('FriendsList', () => {
  it('initializes friends list', () => {
    const friendList = new FriendList();
    expect(friendList.friends.length).toEqual(0);
  });

  it('add a friend to the list', () => {
    const friendList = new FriendList();
    friendList.addFriend('Alejandro');
    expect(friendList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    const friendList = new FriendList();
    friendList.addFriend('Alejandro');
  });
});
