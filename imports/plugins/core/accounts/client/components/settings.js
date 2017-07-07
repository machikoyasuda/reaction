import React, { Component } from "react";
import PropTypes from "prop-types";
import AddAdmninForm from "./addAdminForm";
import GroupSettings from "./groupSettings";


class SettingsComponent extends Component {
  static propTypes = {
    accounts: PropTypes.array,
    getGroupPermissions: PropTypes.function,
    groups: PropTypes.object,
    hasPermissionChecked: PropTypes.function,
    toggleGroupPermission: PropTypes.function
  }

  renderAddAdminForm() {
    return (
        <AddAdmninForm />
    );
  }

  renderGroupSettings() {
    const { groups,
      getGroupPermissions,
      hasPermissionChecked,
      toggleGroupPermission } = this.props;

    return (
        <GroupSettings
          groups={groups}
          getGroupPermissions={getGroupPermissions}
          hasPermissionChecked={hasPermissionChecked}
          toggleGroupPermission={toggleGroupPermission}
        />
    );
  }

  render() {
    return (
        <div className="groups-form">
        {this.renderAddAdminForm()}
        {this.renderGroupSettings()}
        </div>
    );
  }
}

export default SettingsComponent;