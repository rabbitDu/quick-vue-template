export default class User {
    constructor(userData) {
        Object.assign(this, userData);
    }

    hasRole(roleKey) {
        return this.roles.some((role) => role.roleKey === roleKey);
    }

    /**
     * 国内用户
     * @returns {Boolean}
     */
    isDomestic() {
        return this.hasRole('管理员');
    }

    isAdmin() {
        return this.hasRole('supAdmin') || this.hasRole('admin');
    }


}
