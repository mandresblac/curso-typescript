"use strict";
// ENUMS
// Los enums pueden ser numeriocos o strings
var RolesEnum;
(function (RolesEnum) {
    RolesEnum["User"] = "USER";
    RolesEnum["Admin"] = "ADMIN";
    RolesEnum["SuperAdmin"] = "SUPERADMIN";
})(RolesEnum || (RolesEnum = {}));
;
console.log(RolesEnum.Admin);
// OBJECTS
const rolesObject = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(rolesObject.Admin);
