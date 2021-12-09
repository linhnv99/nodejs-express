const { DataTypes } = require("sequelize")

const sequelize = require("../configs/sequelize");
const RoleTypes = require("./enums/RoleTypes")
const utils = require("../utils");
const { compare } = require("bcrypt");

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  name: DataTypes.STRING,
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    set(password) {
      this.setDataValue("password", utils.hashPassword(password))
    }
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: RoleTypes.USER
  },
  createdAt: {
    type: DataTypes.DATE,
    field: "created_at"
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: "updated_at"
  }
}, {
  timestamps: true,
  tableName: "users"
})

User.prototype.comparePassword = function (passwordIn) {
  return utils.comparePassword(passwordIn, this.password)
}

module.exports = User;