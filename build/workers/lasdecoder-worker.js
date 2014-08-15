Potree.workers.lasdecoder = new Potree.WorkerManager(atob("CgovL3ZhciBwb2ludEZvcm1hdFJlYWRlcnMgPSB7Ci8vCTA6IGZ1bmN0aW9uKGR2KSB7Ci8vCQlyZXR1cm4gewovLwkJCSJwb3NpdGlvbiI6IFsgZHYuZ2V0SW50MzIoMCwgdHJ1ZSksIGR2LmdldEludDMyKDQsIHRydWUpLCBkdi5nZXRJbnQzMig4LCB0cnVlKV0sCi8vCQkJImludGVuc2l0eSI6IGR2LmdldFVpbnQxNigxMiwgdHJ1ZSksCi8vCQkJImNsYXNzaWZpY2F0aW9uIjogZHYuZ2V0VWludDgoMTYsIHRydWUpCi8vCQl9OwovLwl9LAovLwkxOiBmdW5jdGlvbihkdikgewovLwkJcmV0dXJuIHsKLy8JCQkicG9zaXRpb24iOiBbIGR2LmdldEludDMyKDAsIHRydWUpLCBkdi5nZXRJbnQzMig0LCB0cnVlKSwgZHYuZ2V0SW50MzIoOCwgdHJ1ZSldLAovLwkJCSJpbnRlbnNpdHkiOiBkdi5nZXRVaW50MTYoMTIsIHRydWUpLAovLwkJCSJjbGFzc2lmaWNhdGlvbiI6IGR2LmdldFVpbnQ4KDE2LCB0cnVlKQovLwkJfTsKLy8JfSwKLy8JMjogZnVuY3Rpb24oZHYpIHsKLy8JCXJldHVybiB7Ci8vCQkJInBvc2l0aW9uIjogWyBkdi5nZXRJbnQzMigwLCB0cnVlKSwgZHYuZ2V0SW50MzIoNCwgdHJ1ZSksIGR2LmdldEludDMyKDgsIHRydWUpXSwKLy8JCQkiaW50ZW5zaXR5IjogZHYuZ2V0VWludDE2KDEyLCB0cnVlKSwKLy8JCQkiY2xhc3NpZmljYXRpb24iOiBkdi5nZXRVaW50OCgxNiwgdHJ1ZSksCi8vCQkJImNvbG9yIjogW2R2LmdldFVpbnQxNigyMCwgdHJ1ZSksIGR2LmdldFVpbnQxNigyMiwgdHJ1ZSksIGR2LmdldFVpbnQxNigyNCwgdHJ1ZSldCi8vCQl9OwovLwl9LAovLwkzOiBmdW5jdGlvbihkdikgewovLwkJcmV0dXJuIHsKLy8JCQkicG9zaXRpb24iOiBbIGR2LmdldEludDMyKDAsIHRydWUpLCBkdi5nZXRJbnQzMig0LCB0cnVlKSwgZHYuZ2V0SW50MzIoOCwgdHJ1ZSldLAovLwkJCSJpbnRlbnNpdHkiOiBkdi5nZXRVaW50MTYoMTIsIHRydWUpLAovLwkJCSJjbGFzc2lmaWNhdGlvbiI6IGR2LmdldFVpbnQ4KDE2LCB0cnVlKSwKLy8JCQkiY29sb3IiOiBbZHYuZ2V0VWludDE2KDI4LCB0cnVlKSwgZHYuZ2V0VWludDE2KDMwLCB0cnVlKSwgZHYuZ2V0VWludDE2KDMyLCB0cnVlKV0KLy8JCX07Ci8vCX0KLy99OwovLwkKLy8JCi8vIERlY29kZXMgTEFTIHJlY29yZHMgaW50byBwb2ludHMKLy8KLy92YXIgTEFTRGVjb2RlciA9IGZ1bmN0aW9uKGJ1ZmZlciwgcG9pbnRGb3JtYXRJRCwgcG9pbnRTaXplLCBwb2ludHNDb3VudCwgc2NhbGUsIG9mZnNldCkgewovLwl0aGlzLmFycmF5YiA9IGJ1ZmZlcjsKLy8JdGhpcy5kZWNvZGVyID0gcG9pbnRGb3JtYXRSZWFkZXJzW3BvaW50Rm9ybWF0SURdOwovLwl0aGlzLnBvaW50c0NvdW50ID0gcG9pbnRzQ291bnQ7Ci8vCXRoaXMucG9pbnRTaXplID0gcG9pbnRTaXplOwovLwl0aGlzLnNjYWxlID0gc2NhbGU7Ci8vCXRoaXMub2Zmc2V0ID0gb2Zmc2V0OwovL307Ci8vCi8vTEFTRGVjb2Rlci5wcm90b3R5cGUuZ2V0UG9pbnQgPSBmdW5jdGlvbihpbmRleCkgewovLwlpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMucG9pbnRzQ291bnQpCi8vCQl0aHJvdyBuZXcgRXJyb3IoIlBvaW50IGluZGV4IG91dCBvZiByYW5nZSIpOwovLwovLwl2YXIgZHYgPSBuZXcgRGF0YVZpZXcodGhpcy5hcnJheWIsIGluZGV4ICogdGhpcy5wb2ludFNpemUsIHRoaXMucG9pbnRTaXplKTsKLy8JcmV0dXJuIHRoaXMuZGVjb2Rlcihkdik7Ci8vfTsKCm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KXsKCXZhciBidWZmZXIgPSBldmVudC5kYXRhLmJ1ZmZlcjsKCXZhciBudW1Qb2ludHMgPSBldmVudC5kYXRhLm51bVBvaW50czsKCXZhciBwb2ludFNpemUgPSBldmVudC5kYXRhLnBvaW50U2l6ZTsKCXZhciBwb2ludEZvcm1hdElEID0gZXZlbnQuZGF0YS5wb2ludEZvcm1hdElEOwoJdmFyIHNjYWxlID0gZXZlbnQuZGF0YS5zY2FsZTsKCXZhciBvZmZzZXQgPSBldmVudC5kYXRhLm9mZnNldDsKCXZhciBtaW5zID0gZXZlbnQuZGF0YS5taW5zOwoJdmFyIG1heHMgPSBldmVudC5kYXRhLm1heHM7CgkKCXZhciB0ZW1wID0gbmV3IEFycmF5QnVmZmVyKDQpOwoJdmFyIHRlbXBVaW50OCA9IG5ldyBVaW50OEFycmF5KHRlbXApOwoJdmFyIHRlbXBVaW50MTYgPSBuZXcgVWludDE2QXJyYXkodGVtcCk7Cgl2YXIgdGVtcEZsb2F0MzIgPSBuZXcgRmxvYXQzMkFycmF5KHRlbXApOwoJdmFyIHRlbXBJbnQzMiA9IG5ldyBJbnQzMkFycmF5KHRlbXApOwoJdmFyIGJ1ZmZlclZpZXcgPSBuZXcgVWludDhBcnJheShidWZmZXIpOwoJCgl2YXIgcEJ1ZmYgPSBuZXcgQXJyYXlCdWZmZXIobnVtUG9pbnRzKjMqNCk7Cgl2YXIgY0J1ZmYgPSBuZXcgQXJyYXlCdWZmZXIobnVtUG9pbnRzKjMqNCk7Cgl2YXIgaUJ1ZmYgPSBuZXcgQXJyYXlCdWZmZXIobnVtUG9pbnRzKjQpOwoJdmFyIGNsQnVmZiA9IG5ldyBBcnJheUJ1ZmZlcihudW1Qb2ludHMpOwoJCgl2YXIgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShwQnVmZik7Cgl2YXIgY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShjQnVmZik7Cgl2YXIgaW50ZW5zaXRpZXMgPSBuZXcgRmxvYXQzMkFycmF5KGlCdWZmKTsKCXZhciBjbGFzc2lmaWNhdGlvbnMgPSBuZXcgVWludDhBcnJheShjbEJ1ZmYpOwoJCgkKCS8vIHRlbXAgYXJyYXlzIHNlZW0gdG8gYmUgc2lnbmlmaWNhbnRseSBmYXN0ZXIgdGhhbiBEYXRhVmlld3MKCS8vIGF0IHRoZSBtb21lbnQ6IGh0dHA6Ly9qc3BlcmYuY29tL2RhdGF2aWV3LXZzLXRlbXBvcmFyeS1mbG9hdDY0YXJyYXkKCWZvcih2YXIgaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKyl7CgkKCQkvLyBQT1NJVElPTgoJCXRlbXBVaW50OFswXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrMF07CgkJdGVtcFVpbnQ4WzFdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsxXTsKCQl0ZW1wVWludDhbMl0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzJdOwoJCXRlbXBVaW50OFszXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrM107CgkJdmFyIHggPSB0ZW1wSW50MzJbMF07CgkJCgkJdGVtcFVpbnQ4WzBdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSs0XTsKCQl0ZW1wVWludDhbMV0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzVdOwoJCXRlbXBVaW50OFsyXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrNl07CgkJdGVtcFVpbnQ4WzNdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSs3XTsKCQl2YXIgeSA9IHRlbXBJbnQzMlswXTsKCQkKCQl0ZW1wVWludDhbMF0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzhdOwoJCXRlbXBVaW50OFsxXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrOV07CgkJdGVtcFVpbnQ4WzJdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsxMF07CgkJdGVtcFVpbnQ4WzNdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsxMV07CgkJdmFyIHogPSB0ZW1wSW50MzJbMF07CgkJCgkJLy9wb3NpdGlvbnNbMyppKzBdID0geCAqIHNjYWxlWzBdICsgb2Zmc2V0WzBdIC0gbWluc1swXTsKCQkvL3Bvc2l0aW9uc1szKmkrMV0gPSB5ICogc2NhbGVbMV0gKyBvZmZzZXRbMV0gLSBtaW5zWzFdOwoJCS8vcG9zaXRpb25zWzMqaSsyXSA9IHogKiBzY2FsZVsyXSArIG9mZnNldFsyXSAtIG1pbnNbMl07CgkJCgkJcG9zaXRpb25zWzMqaSswXSA9IHggKiBzY2FsZVswXSArIG9mZnNldFswXTsKCQlwb3NpdGlvbnNbMyppKzFdID0geSAqIHNjYWxlWzFdICsgb2Zmc2V0WzFdOwoJCXBvc2l0aW9uc1szKmkrMl0gPSB6ICogc2NhbGVbMl0gKyBvZmZzZXRbMl07CgkJCgkJLy8gSU5URU5TSVRZCgkJdGVtcFVpbnQ4WzBdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsxMl07CgkJdGVtcFVpbnQ4WzFdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsxM107CgkJdmFyIGludGVuc2l0eSA9IHRlbXBVaW50MTZbMF07CgkJaW50ZW5zaXRpZXNbaV0gPSBpbnRlbnNpdHk7CgkJCgkJCgkJLy8gQ0xBU1NJRklDQVRJT04KCQl2YXIgY2xhc3NpZmljYXRpb24gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzE2XTsKCQljbGFzc2lmaWNhdGlvbnNbaV0gPSBjbGFzc2lmaWNhdGlvbjsKCQkKCQkKCQkvLyBDT0xPUiwgaWYgYXZhaWxhYmxlCgkJaWYocG9pbnRGb3JtYXRJRCA9PT0gMil7CgkJCXRlbXBVaW50OFswXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrMjBdOwoJCQl0ZW1wVWludDhbMV0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzIxXTsKCQkJdmFyIHIgPSB0ZW1wVWludDE2WzBdOwoJCQkKCQkJdGVtcFVpbnQ4WzBdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsyMl07CgkJCXRlbXBVaW50OFsxXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrMjNdOwoJCQl2YXIgZyA9IHRlbXBVaW50MTZbMF07CgkJCQoJCQl0ZW1wVWludDhbMF0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzI0XTsKCQkJdGVtcFVpbnQ4WzFdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsyNV07CgkJCXZhciBiID0gdGVtcFVpbnQxNlswXTsKCQkJCgkJCWNvbG9yc1szKmkrMF0gPSByIC8gNjU1MzY7CgkJCWNvbG9yc1szKmkrMV0gPSBnIC8gNjU1MzY7CgkJCWNvbG9yc1szKmkrMl0gPSBiIC8gNjU1MzY7CgkJfQoJfQoJCgl2YXIgbWVzc2FnZSA9IHsKCQlwb3NpdGlvbjogcEJ1ZmYsIAoJCWNvbG9yOiBjQnVmZiwgCgkJaW50ZW5zaXR5OiBpQnVmZiwKCQljbGFzc2lmaWNhdGlvbjogY2xCdWZmfTsKCQkKCXZhciB0cmFuc2ZlcmFibGVzID0gWwoJCW1lc3NhZ2UucG9zaXRpb24sCgkJbWVzc2FnZS5jb2xvciwgCgkJbWVzc2FnZS5pbnRlbnNpdHksCgkJbWVzc2FnZS5jbGFzc2lmaWNhdGlvbl07CgkJCglwb3N0TWVzc2FnZShtZXNzYWdlLCB0cmFuc2ZlcmFibGVzKTsKfQo="));