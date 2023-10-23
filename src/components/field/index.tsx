/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useRef, useState } from "react";
import { Chart as ChartJS, LinearScale, PointElement } from "chart.js";
import { Bubble } from "react-chartjs-2";
import { IAction } from "interface/actions";
import { IAthlete } from "interface/athletes";
import { IHighlight } from "interface/highlights";
import ModalComponent from "components/modal";

type Props = {
  listActions?: IAction[];
  listAtlhetes?: IAthlete[];
  listHighlights: IHighlight[];
  setHighlightsList: (highlights: IHighlight[]) => void;
  matchId?: string;
};

const FieldComponent: FC<Props> = (props): JSX.Element => {
  ChartJS.register(LinearScale, PointElement);
  const {
    listActions,
    listAtlhetes,
    matchId,
    listHighlights,
    setHighlightsList,
  } = props;
  const [highlightForm, setHighlightForm] = useState<IHighlight>({
    matchId: matchId,
  });
  const fieldRef = useRef();
  const [isDataAvaible, setIsDataAvaible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const plugins = {
    legend: {
      display: false,
    },
    datalabels: {
      color: "black",
      font: {
        weight: "bold",
      },
      formatter: function (value: any) {
        return Math.round(value.v);
      },
    },
  };

  const options = {
    responsive: true,
    animation: false,
    tooltips: {
      enabled: false,
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: -100,
        max: 0,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const [data, setData] = useState<any>({
    datasets: [],
    redraw: false,
  });

  const saveHighlight = (highlight: IHighlight) => {
    setIsDataAvaible(false);
    const action = listActions?.find(
      (act) => Number(highlight.actionId) === act.actionId
    );

    const athlete = listAtlhetes?.find(
      (athlet) => Number(highlight.athleteId) === athlet.athleteId
    );

    const newHighlight: IHighlight = { ...highlight, action, athlete };

    setHighlightForm(newHighlight);

    const newHighlightsList: IHighlight[] = JSON.parse(
      JSON.stringify(listHighlights)
    );
    newHighlightsList.push(newHighlight);

    setHighlightsList(newHighlightsList);

    const newItem = {
      x: highlight.pointX,
      y: highlight.pointY,
      r: 10,
      v: 0,
    };

    const newElement = {
      label: action?.name,
      data: [newItem],
      backgroundColor: action?.color,
      borderColor: "black",
    };

    const newDatasets = [...data.datasets, newElement];
    setData({
      datasets: newDatasets,
      redraw: false,
    });
    setIsDataAvaible(true);
  };

  const chartClick = (event: any) => {
    const width = fieldRef.current?.width || 0;
    const height = fieldRef.current?.height || 0;
    let calcx = (event.clientX * 100) / width;
    calcx = calcx - (0.05 * 100) / calcx;
    let calcy = (event.clientY * 100) / height;
    calcy = (calcy - (0.01 * 100) / calcy) * -1;
    setHighlightForm({
      matchId: highlightForm.matchId,
      pointX: calcx,
      pointY: calcy,
    });
    setIsOpen(true);
  };

  useEffect(() => {
    for (const item of listHighlights) {
      const newItem = {
        x: item.pointX,
        y: item.pointY,
        r: 10,
        v: 0,
      };

      const newElement = {
        label: item.action?.name,
        data: [newItem],
        backgroundColor: item.action?.color,
        borderColor: "black",
      };

      const newDatasets = [...data.datasets, newElement];
      setData({
        datasets: newDatasets,
        redraw: false,
      });
    }
  }, []);

  return isDataAvaible ? (
    <>
      {isOpen && (
        <ModalComponent
          setIsOpen={setIsOpen}
          actions={listActions}
          atlhetes={listAtlhetes}
          highlight={highlightForm}
          key={"modalComponent"}
          handleSubmit={saveHighlight}
        />
      )}
      <Bubble
        ref={fieldRef}
        onClick={chartClick}
        plugins={plugins}
        options={options}
        redraw={false}
        data={data}
        style={{
          backgroundImage: "url(/field-soccer.png)",
          backgroundSize: "cover",
        }}
      />
    </>
  ) : (
    <></>
  );
};

export default FieldComponent;
