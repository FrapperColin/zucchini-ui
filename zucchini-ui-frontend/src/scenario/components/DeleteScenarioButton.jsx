import PropTypes from "prop-types";
import React from "react";

import ConfirmActionButton from "../../ui/components/ConfirmActionButton";

export default class DeleteScenarioButton extends React.PureComponent {
  static propTypes = {
    scenarioId: PropTypes.string,
    onDelete: PropTypes.func.isRequired
  };

  onDelete = () => {
    const { scenarioId, onDelete } = this.props;
    onDelete({ scenarioId });
  };

  render() {
    return (
      <ConfirmActionButton
        bsStyle="danger"
        actionGlyph="remove"
        actionLabel="Supprimer"
        title="Supprimer le scénario"
        message="La suppression est irreversible. Êtes-vous sûr de supprimer ce scénario ?"
        onConfirm={this.onDelete}
      />
    );
  }
}
