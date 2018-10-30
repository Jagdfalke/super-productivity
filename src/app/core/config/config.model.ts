export type KeyboardConfig = Readonly<{
  globalShowHide: string,
  goToDailyPlanner: string,
  goToWorkView: string,
  goToFocusMode: string,
  goToDailyAgenda: string,
  goToSettings: string,
  addNewTask: string,
  showHelp: string,
  openProjectNotes: string,
  openDistractionPanel: string,
  taskEditTitle: string,
  taskToggleNotes: string,
  taskOpenEstimationDialog: string,
  taskToggleDone: string,
  taskAddSubTask: string,
  taskDelete: string,
  selectPreviousTask: string,
  selectNextTask: string,
  moveTaskUp: string,
  moveTaskDown: string,
  moveToBacklog: string,
  moveToTodaysTasks: string,
  expandSubTasks: string,
  collapseSubTasks: string,
  togglePlay: string,
}>;


export type MiscConfig = Readonly<{
  [key: string]: any;
}>;


export type PomodoroConfig = Readonly<{
  [key: string]: any;
}>;


export type GoogleDriveSyncConfig = Readonly<{
  [key: string]: any;
}>;


// SETTINGS (not configurable under config)
export type UiHelperSettings = Readonly<{
  [key: string]: any;
}>;


export type DailyTaskExportSettings = Readonly<{
  [key: string]: any;
}>;


export type TimeSheetExportSettings = Readonly<{
  [key: string]: any;
}>;


export type TimeTrackingHistoryExportSettings = Readonly<{
  [key: string]: any;
}>;


export type CsvExportSettings = Readonly<{
  [key: string]: any;
}>;

export type DailyAgendaSettings = Readonly<{
  [key: string]: any;
}>;


export type GoogleSession = Readonly<{
  accessToken: string,
  refreshToken: string,
  expiresAt: number,
}>;


export type GlobalConfig = Readonly<{
  misc: MiscConfig;
  pomodoro: PomodoroConfig;
  // googleDriveSync: GoogleDriveSyncConfig;
  keyboard: KeyboardConfig;
  _googleSession: GoogleSession;
  _uiHelper: UiHelperSettings;
  _dailyTaskExportSettings: DailyTaskExportSettings;
  _timeSheetExportSettings: TimeSheetExportSettings;
  _timeTrackingHistoryExportSettings: TimeTrackingHistoryExportSettings;
  _csvExportSettings: CsvExportSettings;
  _dailyAgenda: DailyAgendaSettings;
}>;


export type ConfigSectionKey = keyof GlobalConfig;

export type SectionConfig
  = MiscConfig
  | PomodoroConfig
  | KeyboardConfig
  | GoogleSession
  | UiHelperSettings
  | DailyTaskExportSettings
  | TimeSheetExportSettings
  | TimeTrackingHistoryExportSettings
  | CsvExportSettings
  | DailyAgendaSettings
  ;
