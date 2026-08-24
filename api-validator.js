"use strict";
function isNotified(user) {
    user.settings?.notifications;
    return user.settings?.notifications ?? false;
}
let mwendeTest1 = {
    id: 1234,
    username: "mwende",
};
let mwendeTest2 = {
    id: 2345,
    username: "mwendet",
    settings: {
        notifications: false
    },
};
let mwendeTest3 = {
    id: 5678,
    username: "mwendelk",
    settings: {
        notifications: true
    }
};
console.log(isNotified(mwendeTest1));
console.log(isNotified(mwendeTest2));
console.log(isNotified(mwendeTest3));
