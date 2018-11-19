const activeFlowStatus = {
    notStarted: 1,
    shouldStart: 2,
    succeed: 3,
    failed: 4
};

const flowStatus = {
    started: 1,
    selfResolved: 2,
    completed: 3
};

const workflowStatus = {
    started: 1,
    completed: 2
};

export {activeFlowStatus, flowStatus, workflowStatus};