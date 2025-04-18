/**
 * @module im/messenger/lib/integration/immobile/calls
 */
jn.define('im/messenger/lib/integration/immobile/calls', (require, exports, module) => {
	const { serviceLocator } = require('im/messenger/lib/di/service-locator');
	const { Logger } = require('im/messenger/lib/logger');
	const { DialogHelper } = require('im/messenger/lib/helper');
	const { EventType } = require('im/messenger/const');

	/**
	 * @class Calls
	 */
	class Calls
	{
		static createAudioCall(dialogId)
		{
			Logger.info('Calls.createAudioCall', dialogId);

			if (DialogHelper.isDialogId(dialogId))
			{
				const eventData = {
					dialogId,
					video: false,
					chatData: serviceLocator.get('core').getStore().getters['dialoguesModel/getById'](dialogId),
				};

				BX.postComponentEvent('onCallInvite', [eventData], 'calls');

				return;
			}

			const userData = serviceLocator.get('core').getStore().getters['usersModel/getById'](dialogId);
			const eventData = {
				userId: dialogId,
				video: false,
				userData: {
					[userData.id]: userData,
				},
			};

			BX.postComponentEvent('onCallInvite', [eventData], 'calls');
		}

		static createVideoCall(dialogId)
		{
			Logger.info('Calls.createVideoCall', dialogId);

			if (DialogHelper.isDialogId(dialogId))
			{
				const eventData = {
					dialogId,
					video: true,
					chatData: serviceLocator.get('core').getStore().getters['dialoguesModel/getById'](dialogId),
				};

				BX.postComponentEvent('onCallInvite', [eventData], 'calls');

				return;
			}

			const userData = serviceLocator.get('core').getStore().getters['usersModel/getById'](dialogId);
			const eventData = {
				userId: dialogId,
				video: true,
				userData: {
					[dialogId]: userData,
				},
			};

			BX.postComponentEvent('onCallInvite', [eventData], 'calls');
		}

		static joinCall(callId)
		{
			Logger.info('Calls.joinCall', callId);

			BX.postComponentEvent(EventType.call.join, [callId], 'calls');
		}
	}

	module.exports = {
		Calls,
	};
});
