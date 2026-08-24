interface user {
    id: number;
    username: string;
    settings?: {
        notifications: boolean;
    };
}
function isNotified(user:user){
    user.settings?.notifications
    return user.settings?.notifications ?? false;
}
let mwendeTest1: user={
    id:1234,
    username:"mwende",
}
let mwendeTest2: user={
    id:2345,
    username:"mwendet",
    settings:{
        notifications:false
    },
}
let mwendeTest3: user={
    id:5678,
    username:"mwendelk",
    settings:{
        notifications:true
    }
}
console.log(isNotified(mwendeTest1));
console.log(isNotified(mwendeTest2));
console.log(isNotified(mwendeTest3));