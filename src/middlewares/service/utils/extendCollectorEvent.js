const forbiddenEvents = ['noAgreeProtocol', 'frozen', 'invalidToken', 'noPermission']

/**
 * 拓展事件
 * @param {httpEventCollector} collector
 */
export default function extendCollectorEvent (collector) {
  collector.collect(forbiddenEvents)
  collector.forbidden(data => collector.emit(forbiddenEvents[data.code], data))
  return collector
}
