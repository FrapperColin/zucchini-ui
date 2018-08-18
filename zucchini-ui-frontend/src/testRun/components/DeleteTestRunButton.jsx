import PropTypes from "prop-types";
import React from "react";

import ConfirmActionButton from "../../ui/components/ConfirmActionButton";

export default class DeleteTestRunButton extends React.PureComponent {
  static propTypes = {
    testRunId: PropTypes.string,
    onDelete: PropTypes.func.isRequired
  };

  onDelete = () => {
    const { testRunId, onDelete } = this.props;
    onDelete({ testRunId });
  };

  render() {
    return (
      <ConfirmActionButton
        bsStyle="danger"
        actionGlyph="remove"
        actionLabel="Supprimer"
        title="Supprimer le tir"
        message="La suppression est irreversible. Êtes-vous sûr de supprimer ce tir ?"
        onConfirm={this.onDelete}
      />
    );
  }
}
