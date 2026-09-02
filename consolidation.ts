interface profileDetails {
    name: string;
    firstlogin: Date;
    status: ProfileStatus;
}
enum ProfileStatus {
    active = "active",
    inactive = "inactive",
    pending = "pending"
}

function getusersprofileinfo <T> (info: T){
    return info;
}
const userProfile1: profileDetails = {
    name: "mwende",
    firstlogin: new Date("2024-01-01"),
    status: ProfileStatus.active
}
const userProfile2: profileDetails = {
    name: "john",
    firstlogin: new Date("2024-01-02"),
    status: ProfileStatus.inactive
}
const userProfile3: profileDetails = {
    name: "jane",
    firstlogin: new Date("2024-01-03"),
    status: ProfileStatus.pending
}
console.log(getusersprofileinfo(userProfile1));
console.log(getusersprofileinfo(userProfile2));
console.log(getusersprofileinfo(userProfile3));

