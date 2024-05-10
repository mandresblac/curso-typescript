// ENUMS
// Los enums pueden ser numeriocos o strings
enum RolesEnum {
  User = "USER",
  Admin = "ADMIN",
  SuperAdmin = "SUPERADMIN"
};

console.log(RolesEnum.Admin)

// OBJECTS
const rolesObject = {
  User: 0,
  Admin: 1,
  SuperAdmin: 2
};

console.log(rolesObject.Admin)