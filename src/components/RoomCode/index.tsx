import React, { useCallback } from 'react';
import { FiCopy } from 'react-icons/fi';

import * as SC from './styles';

type RoomCodeProps = {
  code: string;
};

const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const handleCopyRoomCodeToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <SC.Container onClick={handleCopyRoomCodeToClipboard}>
      <div>
        <FiCopy size={24} />
      </div>

      <span>{`Sala #${code}`}</span>
    </SC.Container>
  );
};

export { RoomCode };
