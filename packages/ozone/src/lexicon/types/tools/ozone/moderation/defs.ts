/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { lexicons } from '../../../../lexicons'
import { isObj, hasProp } from '../../../../util'
import { CID } from 'multiformats/cid'
import * as ComAtprotoAdminDefs from '../../../com/atproto/admin/defs'
import * as ComAtprotoRepoStrongRef from '../../../com/atproto/repo/strongRef'
import * as ChatBskyConvoDefs from '../../../chat/bsky/convo/defs'
import * as ComAtprotoModerationDefs from '../../../com/atproto/moderation/defs'
import * as ComAtprotoServerDefs from '../../../com/atproto/server/defs'
import * as ComAtprotoLabelDefs from '../../../com/atproto/label/defs'

export interface ModEventView {
  id: number
  event:
    | ModEventTakedown
    | ModEventReverseTakedown
    | ModEventComment
    | ModEventReport
    | ModEventLabel
    | ModEventAcknowledge
    | ModEventEscalate
    | ModEventMute
    | ModEventUnmute
    | ModEventMuteReporter
    | ModEventUnmuteReporter
    | ModEventEmail
    | ModEventResolveAppeal
    | ModEventDivert
    | ModEventTag
    | AccountEvent
    | IdentityEvent
    | RecordEvent
    | ModEventPriorityScore
    | { $type: string; [k: string]: unknown }
  subject:
    | ComAtprotoAdminDefs.RepoRef
    | ComAtprotoRepoStrongRef.Main
    | ChatBskyConvoDefs.MessageRef
    | { $type: string; [k: string]: unknown }
  subjectBlobCids: string[]
  createdBy: string
  createdAt: string
  creatorHandle?: string
  subjectHandle?: string
  [k: string]: unknown
}

export function isModEventView(v: unknown): v is ModEventView {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventView'
  )
}

export function validateModEventView(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventView', v)
}

export interface ModEventViewDetail {
  id: number
  event:
    | ModEventTakedown
    | ModEventReverseTakedown
    | ModEventComment
    | ModEventReport
    | ModEventLabel
    | ModEventAcknowledge
    | ModEventEscalate
    | ModEventMute
    | ModEventUnmute
    | ModEventMuteReporter
    | ModEventUnmuteReporter
    | ModEventEmail
    | ModEventResolveAppeal
    | ModEventDivert
    | ModEventTag
    | AccountEvent
    | IdentityEvent
    | RecordEvent
    | ModEventPriorityScore
    | { $type: string; [k: string]: unknown }
  subject:
    | RepoView
    | RepoViewNotFound
    | RecordView
    | RecordViewNotFound
    | { $type: string; [k: string]: unknown }
  subjectBlobs: BlobView[]
  createdBy: string
  createdAt: string
  [k: string]: unknown
}

export function isModEventViewDetail(v: unknown): v is ModEventViewDetail {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventViewDetail'
  )
}

export function validateModEventViewDetail(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventViewDetail', v)
}

export interface SubjectStatusView {
  id: number
  subject:
    | ComAtprotoAdminDefs.RepoRef
    | ComAtprotoRepoStrongRef.Main
    | { $type: string; [k: string]: unknown }
  hosting?:
    | AccountHosting
    | RecordHosting
    | { $type: string; [k: string]: unknown }
  subjectBlobCids?: string[]
  subjectRepoHandle?: string
  /** Timestamp referencing when the last update was made to the moderation status of the subject */
  updatedAt: string
  /** Timestamp referencing the first moderation status impacting event was emitted on the subject */
  createdAt: string
  reviewState: SubjectReviewState
  /** Sticky comment on the subject. */
  comment?: string
  /** Numeric value representing the level of priority. Higher score means higher priority. */
  priorityScore?: number
  muteUntil?: string
  muteReportingUntil?: string
  lastReviewedBy?: string
  lastReviewedAt?: string
  lastReportedAt?: string
  /** Timestamp referencing when the author of the subject appealed a moderation action */
  lastAppealedAt?: string
  takendown?: boolean
  /** True indicates that the a previously taken moderator action was appealed against, by the author of the content. False indicates last appeal was resolved by moderators. */
  appealed?: boolean
  suspendUntil?: string
  tags?: string[]
  accountStats?: AccountStats
  recordsStats?: RecordsStats
  [k: string]: unknown
}

export function isSubjectStatusView(v: unknown): v is SubjectStatusView {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#subjectStatusView'
  )
}

export function validateSubjectStatusView(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#subjectStatusView', v)
}

/** Statistics about a particular account subject */
export interface AccountStats {
  /** Total number of reports on the account */
  reportCount?: number
  /** Total number of appeals against a moderation action on the account */
  appealCount?: number
  /** Number of times the account was suspended */
  suspendCount?: number
  /** Number of times the account was escalated */
  escalateCount?: number
  /** Number of times the account was taken down */
  takedownCount?: number
  [k: string]: unknown
}

export function isAccountStats(v: unknown): v is AccountStats {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#accountStats'
  )
}

export function validateAccountStats(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#accountStats', v)
}

/** Statistics about a set of record subject items */
export interface RecordsStats {
  /** Cumulative sum of the number of reports on the items in the set */
  totalReports?: number
  /** Number of items that were reported at least once */
  reportedCount?: number
  /** Number of items that were escalated at least once */
  escalatedCount?: number
  /** Number of items that were appealed at least once */
  appealedCount?: number
  /** Total number of item in the set */
  subjectCount?: number
  /** Number of item currently in "reviewOpen" or "reviewEscalated" state */
  pendingCount?: number
  /** Number of item currently in "reviewNone" or "reviewClosed" state */
  processedCount?: number
  /** Number of item currently taken down */
  takendownCount?: number
  [k: string]: unknown
}

export function isRecordsStats(v: unknown): v is RecordsStats {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#recordsStats'
  )
}

export function validateRecordsStats(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#recordsStats', v)
}

export type SubjectReviewState =
  | 'lex:tools.ozone.moderation.defs#reviewOpen'
  | 'lex:tools.ozone.moderation.defs#reviewEscalated'
  | 'lex:tools.ozone.moderation.defs#reviewClosed'
  | 'lex:tools.ozone.moderation.defs#reviewNone'
  | (string & {})

/** Moderator review status of a subject: Open. Indicates that the subject needs to be reviewed by a moderator */
export const REVIEWOPEN = 'tools.ozone.moderation.defs#reviewOpen'
/** Moderator review status of a subject: Escalated. Indicates that the subject was escalated for review by a moderator */
export const REVIEWESCALATED = 'tools.ozone.moderation.defs#reviewEscalated'
/** Moderator review status of a subject: Closed. Indicates that the subject was already reviewed and resolved by a moderator */
export const REVIEWCLOSED = 'tools.ozone.moderation.defs#reviewClosed'
/** Moderator review status of a subject: Unnecessary. Indicates that the subject does not need a review at the moment but there is probably some moderation related metadata available for it */
export const REVIEWNONE = 'tools.ozone.moderation.defs#reviewNone'

/** Take down a subject permanently or temporarily */
export interface ModEventTakedown {
  comment?: string
  /** Indicates how long the takedown should be in effect before automatically expiring. */
  durationInHours?: number
  /** If true, all other reports on content authored by this account will be resolved (acknowledged). */
  acknowledgeAccountSubjects?: boolean
  /** Names/Keywords of the policies that drove the decision. */
  policies?: string[]
  [k: string]: unknown
}

export function isModEventTakedown(v: unknown): v is ModEventTakedown {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventTakedown'
  )
}

export function validateModEventTakedown(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventTakedown', v)
}

/** Revert take down action on a subject */
export interface ModEventReverseTakedown {
  /** Describe reasoning behind the reversal. */
  comment?: string
  [k: string]: unknown
}

export function isModEventReverseTakedown(
  v: unknown,
): v is ModEventReverseTakedown {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventReverseTakedown'
  )
}

export function validateModEventReverseTakedown(v: unknown): ValidationResult {
  return lexicons.validate(
    'tools.ozone.moderation.defs#modEventReverseTakedown',
    v,
  )
}

/** Resolve appeal on a subject */
export interface ModEventResolveAppeal {
  /** Describe resolution. */
  comment?: string
  [k: string]: unknown
}

export function isModEventResolveAppeal(
  v: unknown,
): v is ModEventResolveAppeal {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventResolveAppeal'
  )
}

export function validateModEventResolveAppeal(v: unknown): ValidationResult {
  return lexicons.validate(
    'tools.ozone.moderation.defs#modEventResolveAppeal',
    v,
  )
}

/** Add a comment to a subject */
export interface ModEventComment {
  comment: string
  /** Make the comment persistent on the subject */
  sticky?: boolean
  [k: string]: unknown
}

export function isModEventComment(v: unknown): v is ModEventComment {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventComment'
  )
}

export function validateModEventComment(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventComment', v)
}

/** Report a subject */
export interface ModEventReport {
  comment?: string
  /** Set to true if the reporter was muted from reporting at the time of the event. These reports won't impact the reviewState of the subject. */
  isReporterMuted?: boolean
  reportType: ComAtprotoModerationDefs.ReasonType
  [k: string]: unknown
}

export function isModEventReport(v: unknown): v is ModEventReport {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventReport'
  )
}

export function validateModEventReport(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventReport', v)
}

/** Apply/Negate labels on a subject */
export interface ModEventLabel {
  comment?: string
  createLabelVals: string[]
  negateLabelVals: string[]
  /** Indicates how long the label will remain on the subject. Only applies on labels that are being added. */
  durationInHours?: number
  [k: string]: unknown
}

export function isModEventLabel(v: unknown): v is ModEventLabel {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventLabel'
  )
}

export function validateModEventLabel(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventLabel', v)
}

/** Set priority score of the subject. Higher score means higher priority. */
export interface ModEventPriorityScore {
  comment?: string
  score: number
  [k: string]: unknown
}

export function isModEventPriorityScore(
  v: unknown,
): v is ModEventPriorityScore {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventPriorityScore'
  )
}

export function validateModEventPriorityScore(v: unknown): ValidationResult {
  return lexicons.validate(
    'tools.ozone.moderation.defs#modEventPriorityScore',
    v,
  )
}

export interface ModEventAcknowledge {
  comment?: string
  /** If true, all other reports on content authored by this account will be resolved (acknowledged). */
  acknowledgeAccountSubjects?: boolean
  [k: string]: unknown
}

export function isModEventAcknowledge(v: unknown): v is ModEventAcknowledge {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventAcknowledge'
  )
}

export function validateModEventAcknowledge(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventAcknowledge', v)
}

export interface ModEventEscalate {
  comment?: string
  [k: string]: unknown
}

export function isModEventEscalate(v: unknown): v is ModEventEscalate {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventEscalate'
  )
}

export function validateModEventEscalate(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventEscalate', v)
}

/** Mute incoming reports on a subject */
export interface ModEventMute {
  comment?: string
  /** Indicates how long the subject should remain muted. */
  durationInHours: number
  [k: string]: unknown
}

export function isModEventMute(v: unknown): v is ModEventMute {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventMute'
  )
}

export function validateModEventMute(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventMute', v)
}

/** Unmute action on a subject */
export interface ModEventUnmute {
  /** Describe reasoning behind the reversal. */
  comment?: string
  [k: string]: unknown
}

export function isModEventUnmute(v: unknown): v is ModEventUnmute {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventUnmute'
  )
}

export function validateModEventUnmute(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventUnmute', v)
}

/** Mute incoming reports from an account */
export interface ModEventMuteReporter {
  comment?: string
  /** Indicates how long the account should remain muted. Falsy value here means a permanent mute. */
  durationInHours?: number
  [k: string]: unknown
}

export function isModEventMuteReporter(v: unknown): v is ModEventMuteReporter {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventMuteReporter'
  )
}

export function validateModEventMuteReporter(v: unknown): ValidationResult {
  return lexicons.validate(
    'tools.ozone.moderation.defs#modEventMuteReporter',
    v,
  )
}

/** Unmute incoming reports from an account */
export interface ModEventUnmuteReporter {
  /** Describe reasoning behind the reversal. */
  comment?: string
  [k: string]: unknown
}

export function isModEventUnmuteReporter(
  v: unknown,
): v is ModEventUnmuteReporter {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventUnmuteReporter'
  )
}

export function validateModEventUnmuteReporter(v: unknown): ValidationResult {
  return lexicons.validate(
    'tools.ozone.moderation.defs#modEventUnmuteReporter',
    v,
  )
}

/** Keep a log of outgoing email to a user */
export interface ModEventEmail {
  /** The subject line of the email sent to the user. */
  subjectLine: string
  /** The content of the email sent to the user. */
  content?: string
  /** Additional comment about the outgoing comm. */
  comment?: string
  [k: string]: unknown
}

export function isModEventEmail(v: unknown): v is ModEventEmail {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventEmail'
  )
}

export function validateModEventEmail(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventEmail', v)
}

/** Divert a record's blobs to a 3rd party service for further scanning/tagging */
export interface ModEventDivert {
  comment?: string
  [k: string]: unknown
}

export function isModEventDivert(v: unknown): v is ModEventDivert {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventDivert'
  )
}

export function validateModEventDivert(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventDivert', v)
}

/** Add/Remove a tag on a subject */
export interface ModEventTag {
  /** Tags to be added to the subject. If already exists, won't be duplicated. */
  add: string[]
  /** Tags to be removed to the subject. Ignores a tag If it doesn't exist, won't be duplicated. */
  remove: string[]
  /** Additional comment about added/removed tags. */
  comment?: string
  [k: string]: unknown
}

export function isModEventTag(v: unknown): v is ModEventTag {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#modEventTag'
  )
}

export function validateModEventTag(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#modEventTag', v)
}

/** Logs account status related events on a repo subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking. */
export interface AccountEvent {
  comment?: string
  /** Indicates that the account has a repository which can be fetched from the host that emitted this event. */
  active: boolean
  status?:
    | 'unknown'
    | 'deactivated'
    | 'deleted'
    | 'takendown'
    | 'suspended'
    | 'tombstoned'
    | (string & {})
  timestamp: string
  [k: string]: unknown
}

export function isAccountEvent(v: unknown): v is AccountEvent {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#accountEvent'
  )
}

export function validateAccountEvent(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#accountEvent', v)
}

/** Logs identity related events on a repo subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking. */
export interface IdentityEvent {
  comment?: string
  handle?: string
  pdsHost?: string
  tombstone?: boolean
  timestamp: string
  [k: string]: unknown
}

export function isIdentityEvent(v: unknown): v is IdentityEvent {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#identityEvent'
  )
}

export function validateIdentityEvent(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#identityEvent', v)
}

/** Logs lifecycle event on a record subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking. */
export interface RecordEvent {
  comment?: string
  op: 'create' | 'update' | 'delete' | (string & {})
  cid?: string
  timestamp: string
  [k: string]: unknown
}

export function isRecordEvent(v: unknown): v is RecordEvent {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#recordEvent'
  )
}

export function validateRecordEvent(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#recordEvent', v)
}

export interface RepoView {
  did: string
  handle: string
  email?: string
  relatedRecords: {}[]
  indexedAt: string
  moderation: Moderation
  invitedBy?: ComAtprotoServerDefs.InviteCode
  invitesDisabled?: boolean
  inviteNote?: string
  deactivatedAt?: string
  threatSignatures?: ComAtprotoAdminDefs.ThreatSignature[]
  [k: string]: unknown
}

export function isRepoView(v: unknown): v is RepoView {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#repoView'
  )
}

export function validateRepoView(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#repoView', v)
}

export interface RepoViewDetail {
  did: string
  handle: string
  email?: string
  relatedRecords: {}[]
  indexedAt: string
  moderation: ModerationDetail
  labels?: ComAtprotoLabelDefs.Label[]
  invitedBy?: ComAtprotoServerDefs.InviteCode
  invites?: ComAtprotoServerDefs.InviteCode[]
  invitesDisabled?: boolean
  inviteNote?: string
  emailConfirmedAt?: string
  deactivatedAt?: string
  threatSignatures?: ComAtprotoAdminDefs.ThreatSignature[]
  [k: string]: unknown
}

export function isRepoViewDetail(v: unknown): v is RepoViewDetail {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#repoViewDetail'
  )
}

export function validateRepoViewDetail(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#repoViewDetail', v)
}

export interface RepoViewNotFound {
  did: string
  [k: string]: unknown
}

export function isRepoViewNotFound(v: unknown): v is RepoViewNotFound {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#repoViewNotFound'
  )
}

export function validateRepoViewNotFound(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#repoViewNotFound', v)
}

export interface RecordView {
  uri: string
  cid: string
  value: {}
  blobCids: string[]
  indexedAt: string
  moderation: Moderation
  repo: RepoView
  [k: string]: unknown
}

export function isRecordView(v: unknown): v is RecordView {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#recordView'
  )
}

export function validateRecordView(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#recordView', v)
}

export interface RecordViewDetail {
  uri: string
  cid: string
  value: {}
  blobs: BlobView[]
  labels?: ComAtprotoLabelDefs.Label[]
  indexedAt: string
  moderation: ModerationDetail
  repo: RepoView
  [k: string]: unknown
}

export function isRecordViewDetail(v: unknown): v is RecordViewDetail {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#recordViewDetail'
  )
}

export function validateRecordViewDetail(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#recordViewDetail', v)
}

export interface RecordViewNotFound {
  uri: string
  [k: string]: unknown
}

export function isRecordViewNotFound(v: unknown): v is RecordViewNotFound {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#recordViewNotFound'
  )
}

export function validateRecordViewNotFound(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#recordViewNotFound', v)
}

export interface Moderation {
  subjectStatus?: SubjectStatusView
  [k: string]: unknown
}

export function isModeration(v: unknown): v is Moderation {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#moderation'
  )
}

export function validateModeration(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#moderation', v)
}

export interface ModerationDetail {
  subjectStatus?: SubjectStatusView
  [k: string]: unknown
}

export function isModerationDetail(v: unknown): v is ModerationDetail {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#moderationDetail'
  )
}

export function validateModerationDetail(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#moderationDetail', v)
}

export interface BlobView {
  cid: string
  mimeType: string
  size: number
  createdAt: string
  details?:
    | ImageDetails
    | VideoDetails
    | { $type: string; [k: string]: unknown }
  moderation?: Moderation
  [k: string]: unknown
}

export function isBlobView(v: unknown): v is BlobView {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#blobView'
  )
}

export function validateBlobView(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#blobView', v)
}

export interface ImageDetails {
  width: number
  height: number
  [k: string]: unknown
}

export function isImageDetails(v: unknown): v is ImageDetails {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#imageDetails'
  )
}

export function validateImageDetails(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#imageDetails', v)
}

export interface VideoDetails {
  width: number
  height: number
  length: number
  [k: string]: unknown
}

export function isVideoDetails(v: unknown): v is VideoDetails {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#videoDetails'
  )
}

export function validateVideoDetails(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#videoDetails', v)
}

export interface AccountHosting {
  status:
    | 'takendown'
    | 'suspended'
    | 'deleted'
    | 'deactivated'
    | 'unknown'
    | (string & {})
  updatedAt?: string
  createdAt?: string
  deletedAt?: string
  deactivatedAt?: string
  reactivatedAt?: string
  [k: string]: unknown
}

export function isAccountHosting(v: unknown): v is AccountHosting {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#accountHosting'
  )
}

export function validateAccountHosting(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#accountHosting', v)
}

export interface RecordHosting {
  status: 'deleted' | 'unknown' | (string & {})
  updatedAt?: string
  createdAt?: string
  deletedAt?: string
  [k: string]: unknown
}

export function isRecordHosting(v: unknown): v is RecordHosting {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'tools.ozone.moderation.defs#recordHosting'
  )
}

export function validateRecordHosting(v: unknown): ValidationResult {
  return lexicons.validate('tools.ozone.moderation.defs#recordHosting', v)
}
