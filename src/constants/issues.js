export const IssueType = {
   TASK: "new task",
   BUG: "bug",
};

export const IssueStatus = {
   BACKLOG: "1",
   SELECTED: "2",
   INPROGRESS: "3",
   DONE: "4",
};

export const IssuePriority = {
   HIGH: "1",
   MEDIUM: "2",
   LOW: "3",
   LOWEST: "4",
};

export const IssueTypeCopy = {
   [IssueType.TASK]: "Task",
   [IssueType.BUG]: "Bug",
};

export const IssueStatusCopy = {
   [IssueStatus.BACKLOG]: "Backlog",
   [IssueStatus.SELECTED]: "Selected for development",
   [IssueStatus.INPROGRESS]: "In progress",
   [IssueStatus.DONE]: "Done",
};

export const IssuePriorityCopy = {
   [IssuePriority.HIGH]: "High",
   [IssuePriority.MEDIUM]: "Medium",
   [IssuePriority.LOW]: "Low",
   [IssuePriority.LOWEST]: "Lowest",
};
