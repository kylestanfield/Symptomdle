import React from 'react';
import { Modal } from 'react-bootstrap';

interface SettingsModalProps {
  show: boolean;
  onHide: () => void;
  isHardMode: boolean;
  setIsHardMode: (isHard: boolean) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ show, onHide, isHardMode, setIsHardMode }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-check form-switch d-flex justify-content-between align-items-center">
          <label className="form-check-label" htmlFor="hardModeSwitch">
            {isHardMode ? 'Hard Mode' : 'Easy Mode'}
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="hardModeSwitch"
            checked={isHardMode}
            onChange={() => setIsHardMode(!isHardMode)}
          />
        </div>
        <p className="text-muted small mt-2">
          In Hard Mode, letter hints (green/yellow tiles) are disabled. You must guess based on symptoms alone.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default SettingsModal;
