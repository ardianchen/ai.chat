'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('0_members', {
      member_id: {
        type: Sequelize.STRING(35),
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      member_code: Sequelize.STRING(25),
      member_name: Sequelize.STRING(120),
      member_email: Sequelize.STRING(50),
      member_username: Sequelize.STRING(25),
      member_password: Sequelize.STRING(70),
      member_vc: Sequelize.STRING(10),
      member_vc_created: {
        type: 'TIMESTAMP',
        allowNull: false
      },
      member_vc_expired: {
        type: 'TIMESTAMP',
        allowNull: false
      },
      member_vc_is_used: {
        type: Sequelize.ENUM,
        values: ['yes', 'no'],
        defaultValue: 'no'
      },
      member_status: {
        type: Sequelize.ENUM,
        values: ['not_verified', 'waiting_confirmation', 'verified', 'banned'],
        defaultValue: 'not_verified'
      },
      member_handphone: Sequelize.STRING(15),
      member_idcard_number: Sequelize.STRING(20),
      member_gender: {
        type: Sequelize.ENUM,
        values: ['male', 'female'],
        defaultValue: 'male'
      },
      member_birthdate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      member_image: Sequelize.STRING(25),
      member_image_url: Sequelize.TEXT,
      member_summary: Sequelize.STRING(500),
      member_address: Sequelize.STRING(240),
      member_province_id: Sequelize.STRING(10),
      member_province: Sequelize.STRING(50),
      member_city_id: Sequelize.STRING(10),
      member_city: Sequelize.STRING(50),
      member_subdistrict_id: Sequelize.STRING(10),
      member_subdistrict: Sequelize.STRING(50),
      member_zipcode: Sequelize.STRING(20),
      member_access_from: {
        type: Sequelize.ENUM,
        values: ['web', 'mweb', 'android', 'ios'],
        defaultValue: 'web'
      },
      member_register_from: {
        type: Sequelize.ENUM,
        values: ['gotraining', 'bumn', 'google', 'facebook'],
        defaultValue: 'gotraining'
      },
      member_is_student: {
        type: Sequelize.ENUM,
        values: ['yes', 'no'],
        defaultValue: 'no'
      },
      member_is_instructor: {
        type: Sequelize.ENUM,
        values: ['yes', 'no'],
        defaultValue: 'no'
      },
      member_is_institution: {
        type: Sequelize.ENUM,
        values: ['yes', 'no'],
        defaultValue: 'no'
      },
      member_is_instructor_bimbel: {
        type: Sequelize.ENUM,
        values: ['yes', 'no'],
        defaultValue: 'no'
      },
      member_last_login: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      member_created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        // defaultValue: Sequelize.NOW
      },
      member_updated_at: {
        type: 'TIMESTAMP',
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
