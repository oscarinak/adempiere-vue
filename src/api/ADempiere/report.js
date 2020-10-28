// Get Instance for connection
import {
  ApiRest as requestRest,
  evaluateResponse
} from '@/api/ADempiere/instances.js'

/**
 * Request Pending Documents List
 * @param {string} tableName
 * @param {string} processUuid
 */
export function requestListReportsViews({
  tableName,
  processUuid,
  pageToken,
  pageSize
}) {
  return requestRest({
    url: '/ui/list-report-views',
    data: {
      table_name: tableName,
      process_uuid: processUuid
    },
    params: {
      page_token: pageToken,
      page_size: pageSize
    }
  })
    .then(evaluateResponse)
    .then(reportViewResponse => {
      const { convertReportView } = require('@/utils/ADempiere/apiConverts/report.js')

      return {
        nextPageToken: reportViewResponse.next_page_token,
        recordCount: reportViewResponse.record_count,
        reportViewsList: reportViewResponse.records.map(drill => {
          return convertReportView(drill)
        })
      }
    })
}

// Get print formats from table name, report view uuid or process uuid
export function requestListPrintFormats({
  tableName,
  reportViewUuid,
  processUuid,
  pageToken,
  pageSize
}) {
  return requestRest({
    url: '/ui/list-print-formats',
    data: {
      table_name: tableName,
      report_view_uuid: reportViewUuid,
      process_uuid: processUuid
    },
    params: {
      page_token: pageToken,
      page_size: pageSize
    }
  })
    .then(evaluateResponse)
    .then(responseListPrintFormats => {
      const { convertListPrintFormats } = require('@/utils/ADempiere/apiConverts/report.js')

      return convertListPrintFormats(responseListPrintFormats)
    })
}

// Get drill tables for a report
export function requestListDrillTables({
  tableName,
  pageToken,
  pageSize
}) {
  requestRest({
    url: '/ui/list-drill-tables',
    data: {
      table_name: tableName
    },
    params: {
      page_token: pageToken,
      page_size: pageSize
    }
  })
    .then(evaluateResponse)
    .then(drillTablesResponse => {
      const { convertDrillTables } = require('@/utils/ADempiere/apiConverts/report.js')

      return {
        drillTablesList: drillTablesResponse.records.map(drill => {
          return convertDrillTables(drill)
        }),
        nextPageToken: drillTablesResponse.next_page_token,
        recordCount: drillTablesResponse.record_count
      }
    })
}

// Get report output from parameters
export function requestGetReportOutput({
  tableName,
  printFormatUuid,
  reportViewUuid,
  isSummary,
  reportName,
  reportType,
  parametersList,
  // query criteria
  query,
  whereClause,
  orderByClause
}) {
  return requestRest({
    url: '/ui/get-report-output',
    data: {
      table_name: tableName,
      // reference
      print_format_uuid: printFormatUuid,
      report_view_uuid: reportViewUuid,
      is_summary: isSummary,
      report_name: reportName,
      report_type: reportType,
      // DSL Query
      filters: parametersList,
      // Custom Query
      query,
      where_clause: whereClause,
      order_by_clause: orderByClause
    }
  })
    .then(evaluateResponse)
    .then(reportOutpuResponse => {
      const { convertReportOutput } = require('@/utils/ADempiere/apiConverts/report.js')

      return convertReportOutput(reportOutpuResponse)
    })
}
