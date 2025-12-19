// import Conditions from '../../../../../resources/conditions';
// import Outputs from '../../../../../resources/outputs';
// import { callOverlayHandler } from '../../../../../resources/overlay_plugin_api';
// import { Responses } from '../../../../../resources/responses';
// import { DirectionOutputIntercard, Directions } from '../../../../../resources/util';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
// import { PluginCombatantState } from '../../../../../types/event';
import { TriggerSet } from '../../../../../types/trigger';

export interface Data extends RaidbossData {
}

const triggerSet: TriggerSet<Data> = {
  id: 'mistwake',
  zoneId: ZoneId.Mistwake,
  timelineFile: 'mistwake.txt',
  initData: () => {
    return {};
  },
  triggers: [],
  timelineReplace: [],
};

export default triggerSet;
