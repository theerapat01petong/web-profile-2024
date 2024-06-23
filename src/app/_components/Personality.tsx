import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Entertainer (ESFP Personality)</p>
        <p className="pb-2">
        Entertainers are spontaneous, energetic, and enthusiastic people – life is never boring around them.
        </p>
        <div className="flex gap-1">
          <Badge>Extraverted</Badge>
          <Badge>OBSERVANT</Badge>
          <Badge>FEELING</Badge>
          <Badge>PROSPECTING</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
