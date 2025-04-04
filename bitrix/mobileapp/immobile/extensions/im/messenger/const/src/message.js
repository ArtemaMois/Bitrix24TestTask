/**
 * @module im/messenger/const/message
 */
jn.define('im/messenger/const/message', (require, exports, module) => {
	const MessageType = Object.freeze({
		text: 'text',
		audio: 'audio',
		image: 'image',
		status: 'status',
		systemText: 'system-text',
		unsupported: 'unsupported',
		copilot: 'copilot',
		banner: 'banner',
	});

	const MessageIdType = {
		statusMessage: 'status-message',
		templateSeparatorUnread: 'template-separator-unread',
		templateSeparatorDate: 'template-separator',
	};

	const OwnMessageStatus = Object.freeze({
		sending: 'sending',
		sent: 'sent',
		viewed: 'viewed',
		error: 'error',
	});

	const MessageParams = Object.freeze({
		ComponentId: {
			ChatCopilotCreationMessage: 'ChatCopilotCreationMessage',
			ChatCopilotAddedUsersMessage: 'ChatCopilotAddedUsersMessage',
			CopilotMessage: 'CopilotMessage',

			ConferenceCreationMessage: 'ConferenceCreationMessage',

			ChatCreationMessage: 'ChatCreationMessage',
			GeneralChatCreationMessage: 'GeneralChatCreationMessage',

			ChannelCreationMessage: 'ChannelCreationMessage',
			OpenChannelCreationMessage: 'OpenChannelCreationMessage',
			GeneralChannelCreationMessage: 'GeneralChannelCreationMessage',
		},
	});

	module.exports = {
		MessageType,
		MessageIdType,
		OwnMessageStatus,
		MessageParams,
	};
});
